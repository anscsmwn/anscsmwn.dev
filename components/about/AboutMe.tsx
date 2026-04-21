import Link from 'next/link';
import React from 'react';

const AboutMe = () => {
  return (
    <section>
      <h2 id="about">
        <Link className="text-4xl" href="#about">
          About
        </Link>
      </h2>
      <div className="text-xl leading-relaxed dark:text-gray-300">
        <p className="mt-4">
          Hello, my name is <b>Annas Casmawan Ahmad</b>, you can call me{' '}
          <b>Anca</b>. Yes, I changed my nickname haha — if you&apos;re a
          school or college friend you probably know me as <b>Nas</b> or{' '}
          <b>Annas</b>, but honestly call me whatever you want as long as
          it&apos;s actually my name <i>wkw</i>.
        </p>
        <p className="mt-4">
          I grew up in a small village in{' '}
          <Link
            className="link"
            href="https://www.google.com/search?q=pinrang+sulawesi+selatan"
          >
            Pinrang, Sulawesi Selatan
          </Link>
          . I completed my Bachelor&apos;s degree in Informatics Engineering at{' '}
          <Link className="link" href="https://www.unhas.ac.id/">
            Hasanuddin University
          </Link>{' '}
          in 2024. My career started as a Frontend Developer at{' '}
          <Link className="link" href="https://upanastudio.com/">
            Upana Studio
          </Link>
          , where I turned design mockups into reusable UI components and worked
          closely with backend engineers to wire up APIs. After that I moved to
          Singapore to join{' '}
          <b>Fairtech Pte Ltd</b> as a Software Developer, building and shipping
          fullstack features across web and mobile platforms for real production
          users. These days I work independently — taking projects from client
          brief all the way to deployment, end-to-end.
        </p>
        <p className="mt-4">
          I genuinely enjoy the whole stack. Whether it&apos;s designing a clean
          API, picking the right database schema, or sweating the details on a
          UI — I find all of it interesting. Over the years I&apos;ve shipped
          production software in both startup and enterprise environments, and I
          still get a kick out of seeing something I built actually being used by
          people.
        </p>
        <p className="mt-4">
          Outside of software developing thingy, I love playing and{' '}
          <Link
            className="link"
            href="https://open.spotify.com/user/awic6ztjvku6v724so38dg9z0"
          >
            listening to music
          </Link>
          . I can (barely) play some instruments — guitar, ukulele, and kalimba.
          Also, I love cycling almost every weekend.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
