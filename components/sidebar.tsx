import React, { useState, useEffect } from 'react';
import { Post } from '../lib/types/post';
import getFolders from '../misc/getFolders';
import Link from 'next/link';

export default function Sidebar({
  posts,
  showBackHome = false,
}: {
  posts: Post[];
  showBackHome?: boolean;
}) {
  const folders = getFolders(posts);
  const [activePost, setActivePost] = useState<string | null>(null);
  const handleScroll = () => {
    let nextPost = null;

    // 모든 포스트를 확인하여 현재 스크롤 위치와 일치하는 포스트를 찾습니다.
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const element = document.getElementById(`${post.path}/${post.slug}`);
      if (element) {
        const rect = element.getBoundingClientRect();

        // 현재 활성화된 포스트 다음 포스트가 화면 상단에 도달했는지 확인
        if (rect.top <= window.innerHeight / 3) {
          nextPost = post;
        } else if (nextPost) {
          // 다음 포스트가 찾아졌고 현재 포스트가 그 다음인 경우
          setActivePost(`${nextPost.path}/${nextPost.slug}`);
          return;
        }
      }
    }

    if (nextPost && activePost !== `${nextPost.path}/${nextPost.slug}`) {
      // 마지막 포스트가 활성화된 경우
      setActivePost(`${nextPost.path}/${nextPost.slug}`);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [posts, activePost]); // activePost도 의존성 배열에 추가

  const handleLinkClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col sticky top-0 gap-4" style={{ top: '20px' }}>
      {showBackHome && (
        <Link href={`/`} className="mb-4">
          ← Back home
        </Link>
      )}
      {folders.map((folder) => (
        <div key={folder} className="">
          <a
            href={`#${folder}`} // '#'을 추가
            onClick={handleLinkClick(folder)}
            className="text-xl mb-4"
          >
            {folder}
          </a>
          <div className="ml-4 ">
            {posts
              .filter((post) => post.path.split('/')[1] === folder)
              .map((post) => (
                <a
                  href={`#${post.path}/${post.slug}`} // '#'을 추가
                  key={post.slug}
                  onClick={handleLinkClick(`${post.path}/${post.slug}`)} // ID 형식을 일치
                  className={`text-lg mt-2 block ${
                    activePost === `${post.path}/${post.slug}`
                      ? 'text-blue-500'
                      : 'text-gray-500'
                  }`}
                >
                  {post.title}
                </a>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
