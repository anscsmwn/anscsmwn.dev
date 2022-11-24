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
      <div className="dark:text-gray-300; text-lg leading-relaxed">
        <p className="mt-4">
          Hello, my name is <b>Annas Casmawan Ahmad</b>, you can call me{' '}
          <b>Anca</b>. Yes, i changed my nickname haha, if you&apos;re my
          school/college friend you maybe know me as <b>Nas</b> or <b>Annas</b>{' '}
          but that&apos;s ok, you can call me anything you want as long as
          it&apos;s my name and not someone else <i>wkw</i>.
        </p>
        <p className="mt-4">
          I grew up in a small village located in{' '}
          <Link
            className="link"
            href="https://www.google.com/search?q=pinrang+sulawesi+selatan"
          >
            Pinrang, Sulawesi Selatan
          </Link>
          . I&apos;m currently pursuing my Bachelor&apos;s degree in Informatics
          (Computer science) at{' '}
          <Link className="link" href="https://www.unhas.ac.id/">
            Hasanuddin University
          </Link>{' '}
          . I was previously working as a Frontend developer at a software house
          called{' '}
          <Link className="link" href="https://upanastudio.com/">
            Upana Studio
          </Link>
          .
        </p>
        <p className="mt-4">
          I love exploring everything related to technology. In my sophomore
          year, I learned a lot from the community, i join many community and
          orgs to expand my knowledge, I&apos;m member of{' '}
          <Link
            className="link"
            href="https://www.linkedin.com/company/coder-institute/about/"
          >
            Coder Institute HMIF FT-UH
          </Link>
          . Rigth now, I&apos;m pursuing my dream to become Frontend developer.
        </p>
        <p className="mt-4">
          Outside of software developing thingy, I love playing and{' '}
          <Link
            className="link"
            href="https://open.spotify.com/user/awic6ztjvku6v724so38dg9z0"
          >
            listening music
          </Link>
          . I can (barely) play some music instruments like guitar, ukulele, and
          kalimba. Also, I love cycling (almost) every weekend.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
