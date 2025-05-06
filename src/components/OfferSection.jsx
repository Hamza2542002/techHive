import React from 'react'

export default function OfferSection() {
  return (
    <div className="">
      <div className='bg-green-600 rounded-3xl flex justify-between md:flex-row flex-col items-center my-20 px-10 py-5'>
      <div  className='text-white w-full md:w-[250px] text-start '>
        <h5 data-aos="slide-right" >30% OFF</h5>
        <h1 data-aos="zoom-out" className='text-4xl lg:text-7xl font-semibold'>FINE SMILE</h1>
        <h5 data-aos="fade-up" >10 Jan to 28 Jan</h5>
      </div>
      <div data-aos-once="true" data-aos="zoom-in" className='h-full flex justify-center items-center aos-animate'>
        <img src="/images/smart-watch.png"  className='scale-125 w-[200px] md:w-[300px] object-cover  drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]' alt="" />
      </div>
      <div className='text-white md:w-1/3 flex flex-col items-start gap-4'>
        <h1 data-aos="slide-right" className='font-semibold text-lg'>Air Solo Bass</h1>
        <h1 data-aos="fade-up" className='text-3xl lg:text-5xl font-bold'>Winter Sale</h1>
        <p data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis</p>
        <button data-aos="fade-up" className='bg-white text-primary rounded-full px-4 py-2 mt-4'>Shop Now</button>
      </div>
      </div>
    </div>
  )
}
