import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { links, NavLink } from './Constant';
import ThemeSwitcher from './ThemeSwitcher';
const NavbarMobile = () => {
  const { pathname } = useRouter();
  const navLinks: NavLink[] = [{ url: '/', text: 'Home' }, ...links];
  return (
    <nav className="fixed bottom-2 z-50 w-full px-2">
      <div className=" mx-auto flex w-full max-w-7xl justify-between overflow-x-auto rounded-md border-2 border-dashed border-gray-200 bg-white pr-4 dark:border-light dark:bg-dark sm:px-6 md:hidden lg:px-8">
        <ul className="flex">
          {navLinks.map((link) => {
            return (
              <li key={link.url}>
                <Link
                  className={`min-w-16 inline-block py-5 px-4 text-center font-semibold transition duration-200 ease-in-out hover:bg-gray-300 dark:hover:bg-light ${
                    pathname === link.url &&
                    'border-b-2 border-light font-bold dark:border-gray-300'
                  }`}
                  href={link.url}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>

        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavbarMobile;
