/* eslint-disable @next/next/no-img-element */
import React from "react";

const CountingSection = () => {
  return (
    <>
      <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
          <div>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
              I use to design
            </h2>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="/images/kindpng_237508.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="HTML5 & CSS illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-white transition group-hover:text-primary">
                    HTML5 & CSS
                  </h5>
                  <p className="text-sm text-gray-300">
                    I specialize in creating beautiful and responsive websites using HTML5 and CSS. Let me turn your vision into reality.
                  </p>
                </div>
                <a
                  href="https://www.w3schools.com/css/css_intro.asp"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="/images/7577995.webp"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="Tailwind CSS illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-white transition group-hover:text-primary">
                    Tailwind CSS
                  </h5>
                  <p className="text-sm text-gray-300">
                    {`I leverage the power of Tailwind CSS to create efficient and customizable user interfaces. Let's build something amazing together.`}
                  </p>
                </div>
                <a
                  href="https://tailwindcss.com/"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
                       {/* Add similar blocks for other titles */}
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="/images/139895814.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="Shadcn Ui illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-white transition group-hover:text-primary">
                    Shadcn Ui
                  </h5>
                  <p className="text-sm text-gray-300">
                    {`I utilize Shadcn Ui to create modern and stylish user interfaces. Let's craft a visually stunning experience for your users.`}
                  </p>
                </div>
                <a
                  href="https://ui.shadcn.com/"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative h-full space-y-8 py-12 p-8 transition duration-300 group-hover:bg-gray-800">
                <img
                  src="/images/favicon.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="Dasidy Ui illustration"
                />

                <div className="space-y-2">
                  <h5 className="text-xl font-medium text-white transition group-hover:text-primary">
                    Dasidy Ui
                  </h5>
                  <p className="text-sm text-gray-300">
                    {`I create sleek and intuitive user interfaces with Dasidy Ui. Let's build an interface that enhances user experience and engagement.`}
                  </p>
                </div>
                <a
                  href="https://daisyui.com/"
                  className="flex items-center justify-between group-hover:text-primary"
                >
                  <span className="text-sm">Read more</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CountingSection;
