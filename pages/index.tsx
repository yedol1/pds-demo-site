import React from 'react';

import getSource from '../lib';
import Layout from '../components/layout';
import PostView from '../components/postView';
import { Post } from '../lib/types/post';
import Sidebar from '../components/sidebar';

// Home 컴포넌트
export default function Home({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <div className="md:col-span-1">
        {' '}
        <Sidebar posts={posts} />
      </div>
      <div className="md:col-span-3">
        {posts.map((post) => (
          <div id={`${post.path}/${post.slug}`}>
            <PostView {...post} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const source = getSource();
  const allPosts = await source.getAllPosts();

  // 'Foundation' 폴더의 게시물을 먼저 가져오고, 그다음 'Component' 폴더의 게시물을 가져옵니다.
  const foundationPosts = allPosts.filter(
    (post) => post.path === '/Foundation'
  );
  const componentPosts = allPosts.filter((post) => post.path === '/Component');

  const posts = [...foundationPosts, ...componentPosts];

  return {
    props: { posts },
  };
}
