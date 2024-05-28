/* eslint-disable @next/next/no-img-element */
import PageTitle from '@/components/PageTitle'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
      <PageTitle title='About Me' />
      <main>
        <div className="pt-10 overflow-hidden bg-gray-900 md:pt-0 sm:pt-16 2xl:pt-16 pb-10">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">

              <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Hey 👋 I
                  am
                  <br className="block sm:hidden" /> Suborno
                </h2>
                <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-300 md:mt-8">
                  {`I'm a passionate developer with a knack for designing engaging user experiences. My journey in the tech world began with a fascination for how things work and has evolved into a career dedicated to building efficient and innovative solutions.`}
                </p>

                <p className="mt-4 text-xl text-gray-300 md:mt-8">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                    <span className="relative"> Have a question? </span>
                  </span>
                  <br className="block sm:hidden" />Feel free to reach out on <a href="https://www.linkedin.com/in/suborno180/" title=""
                    className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline">Linkedin</a>
                </p>
              </div>

              <div className="relative">
                {/* <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" /> */}
                <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-lg" src="/my-photo.png" alt="suborno180" />
              </div>

            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white">Background</h3>
                <p className="mt-4 text-lg text-gray-300">
                  I hold a degree in Computer Science from Bangladesh Polytechnic Institute, Rajshahi. Over the years, I have worked on various projects ranging from web development to mobile app development. My passion for technology drives me to continuously learn and adopt new technologies.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Skills</h3>
                <ul className="mt-4 text-lg text-gray-300 list-disc list-inside">
                  <li>HTML5, CSS3, JavaScript</li>
                  <li>React, Next.js</li>
                  <li>Node.js, Express</li>
                  <li>Python</li>
                  <li>SQL, MongoDB</li>
                  <li>Git, GitHub</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Experience</h3>
                <p className="mt-4 text-lg text-gray-300">
                  I have worked as a Frontend Developer at [Your Company], where I contributed to building scalable web applications. I also have experience working as a freelance developer, collaborating with clients to deliver high-quality software solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">Interests</h3>
                <p className="mt-4 text-lg text-gray-300">
                  Apart from coding, I enjoy exploring the latest tech trends, participating in hackathons, and contributing to open-source projects. In my free time, I love reading tech blogs, playing video games, and hiking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page