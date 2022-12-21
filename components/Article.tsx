// Article.tsx
'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
const components = {
  p: (props: any) => (
    <p className="text-xl leading-relaxed dark:text-gray-300">
      {props.children}
    </p>
  ),
};
export function Article({ content }: { content: MDXRemoteProps }) {
  return <MDXRemote {...content} components={components} />;
}
