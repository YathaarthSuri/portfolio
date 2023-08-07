import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
          Made with
          <span className='text-primary text-2xl px-1'>&hearts;</span>by&nbsp;
          <Link
            href='https://github.com/YathaarthSuri'
            className='underline'
            target={'_blank'}
          >
            Yathaarth Suri
          </Link>
        </div>
        <Link
          href='https://github.com/YathaarthSuri'
          className='underline'
          target={'_blank'}
        >
          Say Hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
