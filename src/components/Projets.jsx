import React from 'react'
import fo from '../assets/fo.jpg'
import ii from '../assets/ii.jpg'
import qq from '../assets/qq.jpg'


const Projets = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-black mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl p-6 font-bold  md:text-5xl drop-shadow-1xl text-white'>
    Explorez notre gamme de  <span className="text-[#3ca4ac]">services innovants. </span> </h3>
        
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src={fo}
          alt='/'
        />
       

       
        <img
        className='row-span-2 object-cover w-full h-full'
          src={ii}
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src={qq}
          alt='/'
        />
      </div>

      
    </div>
  );
};

export default Projets;

