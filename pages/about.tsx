import AboutMe from '@/components/about/AboutMe';
import Contact from '@/components/about/Contact';
import KnowledgeBase from '@/components/about/KnowledgeBase';
import Head from '@/components/Head';
import Main from '@/components/layout/Main';
import React from 'react';

const about = () => {
  return (
    <Main className="mt-6 px-5">
      <Head title="About" />
      <div className="mx-auto max-w-3xl">
        <AboutMe />
        <KnowledgeBase />
        <Contact />
      </div>
    </Main>
  );
};

export default about;
