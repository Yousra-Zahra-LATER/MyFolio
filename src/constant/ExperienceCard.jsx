import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/solid';

const Card = ({ role, period, company, duties }) => {
  return (
    <motion.div
      variants={{
        offscreen: {
          y: 150,
        },
        onscreen: {
          y: 0,
          transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 1,
          },
        },
      }}
      whileHover={{ scale: 1.02 }}
      className="cursor-pointer bg-purple-100 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-gray-900"
    >
      <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
        <span>{role}</span>
        <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
          <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
          {period}
        </span>
        <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
          <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
          {company}
        </span>
      </h6>
      <div className="relative mb-4">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t-2 border-pink-900" />
        </div>
        <div className="relative flex justify-center">
          <span className="uppercase px-2 bg-purple-100 text-sm text-gray-500 dark:bg-gray-900">
            duties & responsibilities
          </span>
        </div>
      </div>
      <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Card;
