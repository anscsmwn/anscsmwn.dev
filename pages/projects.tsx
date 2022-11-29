import Head from '@/components/Head';
import Main from '@/components/layout/Main';
import ProjectItem from '@/components/project/ProjectItem';
import React from 'react';

const projects = () => {
  const projects = [
    {
      name: 'PkDx: A PokeDex App',
      created: 'November 2022',
      preview: '/projects/pkdx.png',
      description: 'A simple pokedex web app built with react.js, typescript.',
      'source-code': 'https://github.com/aancaa/pkdx',
      demo: 'https://pkdx-aancaa.vercel.app/',
      'tech-stacks': [
        {
          name: 'React.js',
          color: 'bg-[#57d2f3]',
        },
        {
          name: 'Typescript',
          color: 'bg-[#2f74c0]',
        },
        {
          name: 'Tailwind CSS',
          color: 'bg-[#38bdf8]',
        },
      ],
    },
  ];
  return (
    <>
      <Head title="Projects" />
      <Main className="mt-6 px-5">
        <h1>Projects</h1>
        <p className="mt-2 mb-5">Some collection of my past work</p>
        <section>
          {projects.map((project, idx) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </section>
      </Main>
    </>
  );
};

export default projects;
