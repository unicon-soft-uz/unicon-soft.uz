import Link from 'next/link';
import { Logo } from '../components/Logo';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Popover, Listbox } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  ChartBarIcon,
  BookmarkSquareIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, SunIcon, MoonIcon } from '@heroicons/react/20/solid';
import { solutions, callsToAction, resources } from '../components/exports';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { systemTheme, theme, setTheme } = useTheme();
  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return currentTheme === 'dark' ? (
    <SunIcon
      className=" text-yellow-500 sm: w-5 h-5"
      role="button"
      onClick={() => setTheme('light')}
    />
  ) : (
    <MoonIcon
      className=" text-indigo-500 sm: w-5 h-5"
      role="button"
      onClick={() => setTheme('dark')}
    />
  );
}
export default function Header() {
  const [selected, setSelected] = useState(solutions[0]);

  return (
    <header>
      <Popover className="relative bg-white z-50 w-auto m-0 p-0">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 ">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Logo />
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className=" z-50 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <span>Modullar</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <span className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </span>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>

              <Link
                href="/info"
                className="flex text-base font-medium text-gray-500 hover:text-gray-900"
                passHref
              >
                <ChartBarIcon
                  className="h-5 w-5 flex-shrink-0 text-indigo-600 mx-1"
                  aria-hidden="true"
                />
                Statistika
              </Link>

              <Link
                href="/contact"
                className="flex text-base font-medium text-gray-500 hover:text-gray-900"
                passHref
              >
                <PhoneIcon
                  className="h-5 w-5 flex-shrink-0 text-indigo-600 mx-1"
                  aria-hidden="true"
                />
                Aloqa
              </Link>

              <Popover className="relative z-50">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      )}
                    >
                      <BookmarkSquareIcon className="h-5 w-5 flex-shrink-0 text-indigo-600 mx-1" />
                      <span>{`Ochiq ma'lumot`}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Popover.Panel className="absolute left-1/2 z-50 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className=" rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className=" min-[320px]: ml-3">
              <ThemeChanger />
            </div>
          </div>
        </div>

        <Popover.Panel className="absolute z-50 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-start justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <nav className="grid gap-y-8">
                {/* todo */}
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    <item.icon
                      className="mx-1 h-6 w-6  text-indigo-600"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/info"
                  className="flex text-base font-medium text-gray-500 hover:text-gray-900"
                  passHref
                >
                  <ChartBarIcon
                    className="h-5 w-5 flex-shrink-0 text-indigo-600 mx-1 my-1"
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium text-gray-900">
                    Statistika
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="flex text-base font-medium text-gray-500 hover:text-gray-900"
                  passHref
                >
                  <PhoneIcon
                    className="h-5 w-5 flex-shrink-0 text-indigo-600 mx-1 my-1"
                    aria-hidden="true"
                  />
                  <span className="text-base font-medium text-gray-900">
                    Aloqa
                  </span>
                </Link>

                <Listbox value={selected} onChange={setSelected}>
                  <Listbox.Button className="flex items-start text-base font-medium text-gray-900 hover:text-gray-700">
                    <ChevronDownIcon
                      className="mx-1 h-6 w-6  text-indigo-600"
                      aria-hidden="true"
                    />
                    Modullar
                  </Listbox.Button>

                  <Listbox.Options>
                    {solutions.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className=" bg-gray-50 flex items-start rounded-md p-3 hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </Listbox.Options>
                  <div className=" bg-gray-50 px-5 py-5 flex justify-start space-x-5">
                    {callsToAction.map((item) => (
                      <div key={item.name} className="flow-root">
                        <Link
                          href={item.href}
                          className=" flex items-center rounded-md  text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon
                            className="h-6 w-6 flex-shrink-0 text-indigo-500"
                            aria-hidden="true"
                          />
                          <span className="ml-3">{item.name}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Listbox>
              </nav>
            </div>
          </div>
        </Popover.Panel>
      </Popover>
    </header>
  );
}
