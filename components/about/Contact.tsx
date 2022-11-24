import Link from 'next/link';
import React from 'react';
import { SiGmail, SiSpotify, SiGithub } from 'react-icons/si';
import * as Panelbear from '@panelbear/panelbear-js';

const Contact = () => {
  const data = [
    {
      text: 'Email',
      url: 'mailto:annascasmawannn@gmail.com',
      icon: SiGmail,
    },
    {
      text: 'Github',
      url: 'https://github.com/aancaa',
      icon: SiGithub,
    },
    {
      text: 'Spotify',
      url: 'https://open.spotify.com/user/awic6ztjvku6v724so38dg9z0',
      icon: SiSpotify,
    },
  ];
  const handleViewResume = () => {
    Panelbear.track('ViewResume');
  };
  return (
    <section className="my-5">
      <h2 id="contacts">
        <Link className="text-4xl" href="#contacts">
          Contact
        </Link>
      </h2>
      <div className="mt-4 text-xl leading-relaxed dark:text-gray-300">
        <p>
          I&apos;m always excited to connect with everyone so please don&apos;t
          hesitate to get in{' '}
          <Link className="link" href="mailto:annascasmawannn@gmail.com">
            touch with me
          </Link>{' '}
          by following my social media bellow:
        </p>
      </div>
      <div className="mt-5 space-y-5">
        {data.map((item, idx) => (
          <Link
            key={idx}
            className="flex items-center gap-2 rounded-md border-2 border-dashed p-4 transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
            href={item.url}
          >
            <item.icon className="h-10 w-10" />
            <p className="font-semibold">{item.text}</p>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xl leading-relaxed dark:text-gray-300">
        Also, you can read my resume{' '}
        <Link
          onClick={handleViewResume}
          className="link"
          href="https://drive.google.com/file/d/1eXtJ0fg4av2KiLo1dbx5sVnV7_qjtfq7/view?usp=sharing"
        >
          here
        </Link>
        . Anyway, thanks for visiting my profile and I hope you have a great
        day!
      </p>
    </section>
  );
};

export default Contact;
