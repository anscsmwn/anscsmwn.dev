import Head from '@/components/Head';
import Main from '@/components/layout/Main';
import React from 'react';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Article } from '@/components/Article';
import readingTime from 'reading-time';

const SingleBlog = ({
  frontMatter: { title: titleBlog, date },
  mdxSource,
  readingTime,
}: any) => {
  return (
    <>
      <Head title="Blogs" />
      <Main className="my-6 px-5">
        <h1>{titleBlog}</h1>
        <div className="mt-2 flex items-center gap-2 text-sm text-gray-600 dark:text-zinc-300">
          <p>{date}</p>•<p>{readingTime.text}</p>
        </div>
        <Article content={mdxSource} />
      </Main>
    </>
  );
};
const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
      readingTime: readingTime(content),
    },
  };
};

export { getStaticProps, getStaticPaths };
export default SingleBlog;
