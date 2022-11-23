import React from 'react';
import Link from 'next/link';
import { links } from './Constant';
import ThemeSwitcher from './ThemeSwitcher';

const NavbarDesktop = () => {
  return (
    <nav className="sticky top-0 z-20 w-full border-b-2 border-dashed border-gray-200 px-4 dark:border-light sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl justify-between">
        <div className="flex space-x-5">
          <Link
            href="/"
            className="py-5 px-3 font-doodle text-xl transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-light"
          >
            anscsmwn.dev
          </Link>
          <ul className="flex">
            {links.map((link) => {
              return (
                <li
                  key={link.url}
                  className="min-w-16 py-5 px-3 text-center font-semibold transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-light"
                >
                  <Link href={link.url}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavbarDesktop;
