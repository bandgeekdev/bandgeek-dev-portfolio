import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  const spanWrap = (text: string) => {
    return text.split('').map((char, i) => (
      <span
        key={i}
        className='text-animation'
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        {char}
      </span>
    ));
  };

  return (
    <section className='home w-full h-screen flex flex-col justify-center items-center font-sans bg-[#F0EDE5]'>
      <div className='flex flex-row items-center gap-6'>
        <div className='text-content max-w-2xl w-full px-4 md:px-16'>
          <h1 className='title text-8xl font-mono font-extrabold text-center animate-fade-up animate-once animate-duration-1000 animate-delay-300'>
            Hi
            <strong className='bg-[linear-gradient(135deg,_#a8edea,_#3fcdc7)] bg-clip-text text-transparent'>
              Y'all!
            </strong>
          </h1>
          <p className='mt-8 text-bold text-xl text-center animate-fade-down animate-once animate-duration-1000 animate-delay-500'>
            I am{' '}
            <span className='bg-[linear-gradient(135deg,_#a8edea,_#3fcdc7)] bg-clip-text text-transparent'>
              Robin
            </span>
            , a frontend developer based out of Kentucky and I am ready to build
            sharp, scalable web apps with a creative edge.
          </p>
          <div className='flex flex-row pt-8 gap-4'>
            <a
              className='group relative inline-block focus:ring-3 focus:outline-hidden animate-fade-right animate-once animate-duration-1000 animate-delay-700'
              href='#'
            >
              <span className='absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[linear-gradient(135deg,_#a8edea,_#3fcdc7)] transition-transform group-hover:translate-x-0 group-hover:translate-y-0'></span>
              <span className='relative inline-block w-64 border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black'>
                {spanWrap('Download Resume/CV')}
              </span>
            </a>
            <a
              className='group relative inline-block focus:ring-3 focus:outline-hidden animate-fade-left animate-once animate-duration-1000 animate-delay-900'
              href='#'
            >
              <span className='absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[linear-gradient(135deg,_#a8edea,_#3fcdc7)] transition-transform group-hover:translate-x-0 group-hover:translate-y-0'></span>
              <span className='relative inline-block w-64 border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black text-center'>
                {spanWrap('Contact Me')}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
