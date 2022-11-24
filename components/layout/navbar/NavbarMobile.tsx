import Link from 'next/link';
import React from 'react';
import { links } from './Constant';
import ThemeSwitcher from './ThemeSwitcher';
const NavbarMobile = () => {
  return (
    <nav className="fixed bottom-2 z-50 w-full px-2">
      <div className="mx-auto flex w-full max-w-7xl justify-between border-2 border-dashed border-gray-200 bg-white px-4 dark:border-light dark:bg-dark sm:px-6 md:hidden lg:px-8">
        <div className="flex space-x-5">
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

export default NavbarMobile;
