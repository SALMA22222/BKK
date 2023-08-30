import React from 'react';
import pipa from '../assets/pipa.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src={pipa}
        alt='/'
      />
      <div className='bg-black/40 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
          
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
           <span className="text-black" >Qualité</span> Certifiée,<span className="text-[#3ca4ac]" >Fournitures</span>  Assurées <span className="text-[#3ca4ac]" >!</span>  
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
            est, id consequuntur sequi ipsum vitae sit non exercitationem.
          </p>
          <button className='  py-4 px-16  font-bold rounded-lg  bg-black text-white '>
            Click here
          </button>

        </div>
      </div>
    </div>
  );
};

export default Hero;


  

