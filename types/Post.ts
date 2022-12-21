import { MDXRemoteSerializeResult } from 'next-mdx-remote';
export interface Post {
  frontMatter: {
    title: string;
    date: string;
    description: string;
    thumbnailUrl: string;
  };
  slug: string;
  readingTime?: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  mdxSource: MDXRemoteSerializeResult;
}
