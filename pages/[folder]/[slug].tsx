import React, { useState } from 'react';
import Layout from '../../components/layout';
import PostView from '../../components/postView';
import Sidebar from '../../components/sidebar';
import getSource from '../../lib';
import { Post } from '../../lib/types/post';
import MarkdownImage from '../../components/markdown/image';

export default function Change({ post }: { post: Post }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageSrc = `/static/gif/${post.slug}.gif`;

  return (
    <Layout title={post.title}>
      <Sidebar posts={[]} showBackHome={true} />
      <div className="md:col-span-3">
        <div id={`${post.path}/${post.slug}`}>
          <PostView {...post} />
        </div>
        {/* 시연영상 */}
        <img
          src={imageSrc}
          alt="Tabs-DemoVideo"
          style={{ display: 'none' }}
          onLoad={() => setImageLoaded(true)}
        />
        {imageLoaded && (
          <>
            <h2 className="text-3xl font-bold inline-block mb-2">
              {'.Gif Demo'}
            </h2>
            <MarkdownImage src={imageSrc} alt="Tabs-DemoVideo" />
          </>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params: { folder, slug } }) {
  const source = getSource();
  const post = await source.getPost(`/${folder}/${slug}`);

  return {
    props: {
      post: post,
    },
  };
}

export async function getStaticPaths() {
  const source = getSource();
  const posts = await source.getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { folder: post.path.slice(1), slug: post.slug },
    })),
    fallback: false,
  };
}
