import React from 'react';
import HeadNext from 'next/head';
type HeadProps = {
  title: string;
};

const Head = ({ title }: HeadProps) => {
  return (
    <HeadNext>
      <title>{title} · Anscsmwn.dev</title>
    </HeadNext>
  );
};

export default Head;
