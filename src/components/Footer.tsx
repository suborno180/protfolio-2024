import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-900 pt-4 sm:pt-10 lg:pt-12">
        <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-b border-slate-700 py-6 md:flex-row">
            {/* <!-- nav - start --> */}
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
              <a
                href="/about"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                About
              </a>
              <a
                href="/protfolio"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Protfolio
              </a>
              <a
                href="/blogs"
                className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Blogs
              </a>
            </nav>
            {/* <!-- nav - end --> */}

            {/* <!-- social - start --> */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/suborn0.dev"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
               <FaFacebook size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/suborno-dev/"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
               <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/suborno.dev/"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
               <FaSquareInstagram size={20} />
              </a>

              <a
                href="https://github.com/suborno180/"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
              >
                <FaGithub size={20} />
              </a>
            </div>
            {/* <!-- social - end --> */}
          </div>

          <div className="py-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} - Present suborno180. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
