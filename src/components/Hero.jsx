import React from 'react';
import pipa from '../assets/pipa.jpg'
import Heroo from '../assets/Heroo.png'

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      {/* <img
        className='top-0 left-0 w-full h-screen object-cover'
        src={pipa}
        alt='/'
      /> */}
      <div className='container bg-gradient-to-r from-cyan-500 to-blue-500 absolute top-0 left-0 w-full h-screen' />
        <div className='container absolute top-0 w-full h-full flex justify-between pl-10 pr-10'>
            <div className='flex flex-col justify-center text-white'>
              <div className='md:left-[10%] max-w-[600px] m-auto p-4'>
                <h1 className='font-bold text-2xl md:text-5xl drop-shadow-xl'>
                <span className="text-black" >Qualité</span> Certifiée, Fournitures Assurées!
                </h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
                  est, id consequuntur sequi ipsum vitae sit non exercitationem.
                </p>
                <button className='mt-4 py-4 px-16  font-bold rounded-lg  bg-black text-white '>
                  Click here
                </button>

              </div>
            </div>
            <div className='w-400 m-auto border-r-20'> <img src={Heroo} alt='image' /> </div>
        </div>


      </div>
  );
};

export default Hero;


  

