import React from 'react';

const EducationCard = ({ degree, period, field, university, direction, bgColor }) => {
  return (
    <div className='mt-6 md:mt-0 mb-6'>
      <div className={`flex items-center flex-col sm:flex-row${direction === 'reverse' ? '-reverse' : ''}`}>
        <div className={`flex ${direction === 'reverse' ? 'justify-end' : 'justify-start'} w-full mx-auto items-center`}>
          <div className={`w-full sm:w-1/2 ${direction === 'reverse' ? 'sm:pl-8' : 'sm:pr-8'}`}>
            <div
              data-aos={direction === 'reverse' ? 'fade-left' : 'fade-right'}
              data-aos-duration="1000"
              className={`${bgColor} p-4 rounded shadow group hover:bg-pink-900 cursor-pointer`}
            >
              <h3 className="text-black font-[600] group-hover:text-white text-xl">
                {degree}
              </h3>
              <p className="text-[15px] group-hover:text-white leading-6">
                {period} <br />
                {field} <br />
                {university}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-pink-900 border-custom-pink border-4 w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default EducationCard;
