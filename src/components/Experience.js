import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;
          <a
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>

      <div ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'
        />
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details
            position='Associate Software Developer'
            company='Antino'
            companyLink='https://www.antino.com/'
            time="1st Feb'22 - 31st Jul'23"
            address='Gurugram, India'
            work={`Developed robust and scalable web applications using ReactJS and NextJS and implemented Redux state management for improved performance and efficient data handling. Collaborated on web development projects for Fintech, Edtech, Mobility, and Healthcare sectors, delivering tailored solutions for diverse clients such as Safexpay, Jobizo, Travel Hangouts, DevLabs and Streetlight. Utilized React Hook Form for seamless form validation and user input handling while also incorporating techniques to enhance functionality and user experience. Engaged in end-to-end project development, from requirement gathering to post-implementation support, actively participating in code reviews, debugging, and troubleshoooting, while maintaining open communication with team members and stakeholders to foster collaboration and ensure smooth project execution.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
