import React from 'react';

const Home: React.FC = () => {
  return (
    <section className='home w-full h-screen flex flex-col justify-center items-center font-sans'>
      <div className='flex flex-row items-center gap-6'>
        <div className='text-content max-w-2xl w-full px-8 md:px-32'>
          <h1 className='title text-8xl font-mono font-extrabold'>
            Hi
            <strong className='text-purple-300'>Y'all!</strong>
          </h1>
          <p className='mt-4 text-bold text-xl'>
            I am <span className='text-purple-300'>Robin</span>, a frontend
            developer based out of Kentucky and I am ready to build sharp,
            scalable web apps with a creative edge.
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <a
            className='group relative inline-block focus:ring-3 focus:outline-hidden'
            href='#'
          >
            <span className='absolute inset-0 translate-x-1.5 translate-y-1.5 bg-purple-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0'></span>
            <span className='relative inline-block w-64 border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black'>
              Download Resume/CV
            </span>
          </a>
          <a
            className='group relative inline-block focus:ring-3 focus:outline-hidden'
            href='#'
          >
            <span className='absolute inset-0 translate-x-1.5 translate-y-1.5 bg-purple-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0'></span>
            <span className='relative inline-block w-64 border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black text-center'>
              Contact Me
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
