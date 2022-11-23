import { NextPage } from 'next';
import Image from 'next/image';

import Link from 'next/link';
import Canvas from '../components/canvas/Canvas';
import Doodle from '../components/layout/Doodle';
import Main from '../components/layout/Main';

const Home: NextPage = () => {
  return (
    <Main className="cursor-pencil dark:cursor-pencil-dark">
      <Canvas />
      <div className="m-auto flex flex-col items-center gap-4 pt-5 sm:w-[90%] sm:flex-row sm:pt-20 md:w-[85%] lg:w-[90%] ">
        <div className="noselect">
          <Image src="/me.png" alt="me" priority width={270} height={200} />
          <Doodle />
        </div>
        <div className="mx-auto max-w-2xl">
          <h1 className="font-doodle">Hi, I&apos;m Nas.👋</h1>
          <div>
            <p className="noselect text-md my-5 max-w-[550px] text-center md:text-left md:text-lg">
              I&apos;m a <i>prigrimir</i> who make the computer goes beep
              boop... Currently, I&apos;m focusing on learning about front-end
              developer and UI/UX design.
            </p>
            <p>
              Checkout my{' '}
              <Link
                href="/about"
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
  );
};

export default Home;
