import React from 'react';
import Link from 'next/link';
import { links } from './Constant';
import ThemeSwitcher from './ThemeSwitcher';
import ModalNavigation from './ModalNavigation';

const NavbarDesktop = () => {
  return (
    <nav className="fixed top-0 z-20 hidden w-full border-b-2 border-dashed border-gray-200 bg-white px-4 dark:border-light dark:bg-dark sm:px-6 md:block lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl justify-between">
        <div className="flex space-x-5">
          <Link
            href="/"
            className="py-5 px-3 font-doodle text-2xl transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-light"
          >
            anscsmwn.dev
          </Link>
          <ul className="flex">
            {links.map((link) => {
              return (
                <li key={link.url}>
                  <Link
                    className="inline-block py-6 px-3 text-center font-semibold transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-light"
                    href={link.url}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden items-center justify-center md:flex">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
