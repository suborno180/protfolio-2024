import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <input
          type="checkbox"
          name="hbr"
          id="hbr"
          className="hbr peer"
          hidden
          aria-hidden="true"
        />
        <nav className="fixed z-20 w-full backdrop-blur navbar shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent shadow-none">
          <div className="xl:container m-auto px-6 md:px-12">
            <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0  w-full">
              <div className="w-full flex justify-between lg:w-auto">
                <a
                  href="#"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <div aria-hidden="true" className="flex space-x-1">
                    <div className="h-4 w-4 rounded-full bg-gray-200"></div>
                    <div className="h-6 w-2 bg-green-600"></div>
                  </div>
                  <span className="text-base font-bold text-white">
                    SUBORNO
                  </span>
                </a>
                <label
                  htmlFor="hbr"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border rounded-3xl shadow-gray-300/20 bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none shadow-none border-gray-700 lg:border-0">
                <div className="text-gray-300 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-primaryLight"
                      >
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/protfolio"
                        className="block md:px-4 transition hover:text-primaryLight"
                      >
                        <span>Portfolio</span>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-primaryLight"
                      >
                        <span>Services</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-full space-y-2 border-gray-700 pl-4 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <Link
                    href="#"
                    className="relative flex h-9 ml-auto items-center justify-center sm:px-6 btn btn-warning"
                  >
                    <span className="relative text-sm font-semibold">
                      Contact me
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
