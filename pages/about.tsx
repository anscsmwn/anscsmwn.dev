import AboutMe from '@/components/about/AboutMe';
import Head from '@/components/Head';
import Main from '@/components/layout/Main';
import React from 'react';

const about = () => {
  return (
    <Main className="mt-6">
      <Head title="About" />
      <div className="mx-auto max-w-3xl">
        <AboutMe />
      </div>
    </Main>
  );
};

export default about;
