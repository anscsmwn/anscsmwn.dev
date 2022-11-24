import { NextPage } from 'next';
import Image from 'next/image';

import Link from 'next/link';
import Canvas from '../components/canvas/Canvas';
import Doodle from '../components/layout/Doodle';
import Main from '../components/layout/Main';

const Home: NextPage = () => {
  return (
    <>
      <Main className="cursor-pencil dark:cursor-pencil-dark">
        <Canvas />
        <div className="mt-12 flex flex-col items-center justify-between sm:mt-10 sm:flex-row">
          <div className="noselect relative">
            <Image src="/me.svg" alt="me" priority width={300} height={200} />
            <Doodle />
          </div>
          <div className="max-w-lg text-center md:text-left">
            <h1 className="font-doodle">Hi, I&apos;m Nas.👋</h1>
            <div>
              <p className="noselect text-md my-2 text-center md:text-left md:text-lg">
                I&apos;m a <i>prigrimir</i> who make the computer goes beep
                boop... Currently, I&apos;m focusing on learning about front-end
                developer and UI/UX design.
              </p>
              <p>
                Checkout my{' '}
                <Link
                  href="/projects"
                  className="cursor-pointer relative z-20 font-bold underline decoration-[#CAF688] dark:decoration-[#CAF688]"
                >
                  past works
                </Link>{' '}
                or learn more{' '}
                <Link
                  href="/about"
                  className="cursor-pointer relative z-20 font-bold underline decoration-[#CAF688] dark:decoration-[#CAF688]"
                >
                  about me
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Home;
