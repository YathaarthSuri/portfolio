import React from 'react';

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <h1
        className={`inline-block font-bold capitalize w-full text-dark text-8xl ${className}`}
      >
        {text.split(' ').map((word, index) => (
          <span className='inline-block' key={word + '-' + index}>
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default AnimatedText;
