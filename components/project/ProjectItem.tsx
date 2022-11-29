import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';
interface ProjectItemProps {
  project: {
    name: string;
    created: string;
    preview: string;
    description: string;
    'source-code': string;
    demo: string;
    'tech-stacks': {
      name: string;
      color: string;
    }[];
  };
}
const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <article className="flex w-full flex-col gap-5 rounded-md border-2 border-dashed border-gray-200 p-3 dark:border-light dark:text-gray-300 md:flex-row">
      <Image
        className="w-full md:max-w-lg"
        width={500}
        height={500}
        src={project.preview}
        alt="preview"
      />
      <div>
        <a href={project.demo} className="underline-offset-4 hover:underline">
          <p className="text-2xl font-bold md:text-4xl">{project.name}</p>
        </a>
        <p className="text-sm">Created at {project.created}</p>
        <p className="mt-2 md:text-lg">{project.description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project['tech-stacks'].map((tech, idx) => (
            <p
              className={`rounded-full px-3 py-1 text-sm font-semibold text-neutral-800 md:text-base ${tech.color}`}
              key={idx}
            >
              {tech.name}
            </p>
          ))}
        </div>
        <div className="mt-5 flex gap-2">
          <Link
            href={project['source-code']}
            className="cursor-pointer flex items-center gap-2 font-semibold hover:underline md:text-xl"
          >
            <AiOutlineLink />
            <p>Source Code</p>
          </Link>
          <Link
            href={project.demo}
            className="cursor-pointer flex items-center gap-2 font-semibold hover:underline md:text-xl"
          >
            <BsCodeSlash />
            <p>Demo Project</p>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
