import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}

      <span
        className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative'>
      <button
        className='flex-col justify-center items-center hidden lg:flex'
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href='/' title='Home' className='mr-4' />
          <CustomLink href='/about' title='About' className='mx-4' />
          <CustomLink href='/projects' title='Projects' className='ml-4' />
        </nav>

        <nav className='flex justify-center items-center flex-wrap'>
          <motion.a
            href='https://twitter.com/Yat_the_Dev'
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-3'
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href='https://github.com/YathaarthSuri'
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mx-3'
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href='https://www.linkedin.com/in/yathaarth-suri-783a22156/'
            target={'_blank'}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 ml-3'
          >
            <LinkedInIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] w-full flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
        >
          <nav className='flex flex-col items-center justify-center'>
            <CustomMobileLink href='/' title='Home' toggle={handleClick} />
            <CustomMobileLink
              href='/about'
              title='About'
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/projects'
              title='Projects'
              toggle={handleClick}
            />
          </nav>

          <nav className='flex justify-center items-center flex-wrap mt-2'>
            <motion.a
              href='https://twitter.com/Yat_the_Dev'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mr-3 sm:mx-1'
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href='https://github.com/YathaarthSuri'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='sm:mx-1 w-6 mx-3 bg-light rounded-full dark:bg-dark'
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/yathaarth-suri-783a22156/'
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='sm:mx-1 w-6 ml-3'
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              }`}
            >
              {mode === 'dark' ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
