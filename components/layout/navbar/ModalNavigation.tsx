import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { links } from './Constant';
import Link from 'next/link';
const ModalNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button className="block md:hidden" type="button" onClick={openModal}>
        <svg
          className="h-6 w-6 stroke-dark dark:stroke-white"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.75"
            y1="5.25"
            x2="11.25"
            y2="5.25"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></line>
          <line
            x1="0.75"
            y1="9.25"
            x2="6.25"
            y2="9.25"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></line>
          <line
            x1="5.75"
            y1="1.25"
            x2="11.25"
            y2="1.25"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></line>
        </svg>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-dark">
                  <div className="mt-2">
                    <ul className="flex flex-col items-center gap-5">
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

                  <div className="block md:hidden">
                    <ThemeSwitcher />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalNavigation;
