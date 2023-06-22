import React from 'react'

export default function Hero() {
  return (
   <section className="flex flex-col xl:flex-row ">
  <div className="w-full xl:w-1/2  flex items-center justify-center">
    <div className="w-full  bg-blue-500 z-10 px-48 py-5">
      <h1 className="tracking-tight font-light text-gray-500 text-2xl text-white">Keep in comfort this winter</h1>
        <h1 className="text-4xl md:text-4xl tracking-tight leading-none font-bold text-cyan-500">Air Conditioning</h1>
        <p className="text-lg text-gray-500 mt-2 text-white">Residential air conditioning specialists, we supply and install all major brands throughout south east Queensland, from Ipswich, Brisbane and the Gold Coast.</p>
        <a href="#" className="inline-block bg-cyan-500 hover:bg-pink-600 mt-3 px-6 py-3 rounded-md text-white">Learn More</a>
    </div>
  </div>

  <div className="w-full xl:w-1/2 h-4/5 z-30">
    <img className="object-cover w-full" src="https://res.cloudinary.com/ewebdesigns/image/upload/v1587023644/samsungc_wk4svi.jpg" alt="home comfort air hero" />
  </div>
</section>

  )
}
