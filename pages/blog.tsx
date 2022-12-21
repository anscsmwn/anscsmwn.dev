import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from '@/components/Head';
import Main from '@/components/layout/Main';
import Image from 'next/image';
import readingTime from 'reading-time';

const Blog = ({
  posts,
}: {
  posts: {
    [key: string]: any;
  };
}) => {
  return (
    <>
      <Head title="Blog" />
      <Main className="my-6 px-5">
        <h1>Blog</h1>
        <p className="mt-2 mb-5">Writing about tech stuff or random thoughts</p>
        <section className="grid grid-cols-1 sm:grid-cols-2">
          {posts.map((post: any) => (
            <Link
              className="flex w-full flex-col gap-2 rounded-md border-2 border-dashed border-gray-200 dark:border-light dark:text-gray-300"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <Image
                className="w-full rounded-md"
                width={500}
                height={200}
                src={post.frontMatter.thumbnailUrl}
                alt="preview"
              />
              <div className=" p-3">
                <h3 className="hover:underline">{post.frontMatter.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-600 dark:text-zinc-300">
                  <p>{post.frontMatter.date}</p>•<p>{post.readingTime.text}</p>
                </div>
                <p>{post.frontMatter.description}</p>
              </div>
            </Link>
          ))}
        </section>
      </Main>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8',
    );
    const { data: frontMatter, content } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0],
      readingTime: readingTime(content),
    };
  });
  return {
    props: {
      posts,
    },
  };
};
