import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';





const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4 bg-black' >
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
          bkkkkkkkkkkkkkkkkkkkk
          </h1>
          <p>S..............................................</p>
          <div className='flex justify-between  md:w-[30%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-white'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#3ca4ac] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
             contacter
            </button>
            

          </div>
          <p>
            We.................................................{' '}
            <span className='text-[#3ca4ac]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;