import React from 'react';
import po from '../assets/po.jpg'
import oo from '../assets/oo.jpg'
import wo from '../assets/wo.jpg'
import ni from '../assets/ni.jpg'
import fourn from '../assets/fourn.jpg'



const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={po}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={oo}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={wo}
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={ni}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={fourn}
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>A propos de nous.</h3>
        <p className='text-2xl py-6'>
        Notre entreprise est le fruit de la fusion entre deux mondes essentiels : la construction et l'éducation.
        </p>
        <p className='pb-6'>
          B-K-K est votre guichet unique pour tout ce dont vous avez besoin pour 
          la construction de bâtiments et l'approvisionnement en fournitures scolaires, avec
          livraison ponctuelle pour garantir que vos projets de construction avancent sans accroc
         et que les établissements éducatifs sont équipés pour inspirer l'apprentissage dans un 
         environnement stimulant.
        </p>
        <div>
          <button className='border-black  font-bold mr-4 bg-[#3ca4ac] p-6 hover:shadow-xl'>
            L............
          </button>
          <button className='bg-black font-bold p-6 text-white border-black hover:shadow-xl'>Services</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;