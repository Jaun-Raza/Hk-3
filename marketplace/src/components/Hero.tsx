import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <section>
      <div>
        <Navbar bgColor="bg-[#FBEBB5]" />
      </div>
      {/* <Navbar bgColor="bg-[#FBEBB5]"/> */}
      <main className='flex flex-col w-full md:w-full md:flex-row md:h-[800px] top-[10px] bg-[#FBEBB5] items-center justify-around'>
      {/* left side */}
        <div className='flex pt-10 w-[50%] h-[360px] mt-[12px] sm:w-[440px] sm:mt-[-20px] h-[276px] top-[428px] left-[202px] text-black flex flex-col   ml-[150px] '>
          <h2 className='text-3xl sm:w-[440px] sm:h-[192px] top-[428px] left-[202px] font-["Poppins"] font-medium md:text-[64px] leading-[96px] text-black '>
            Rocket single
          </h2>
          <h2 className='text-3xl sm:w-[440px] h-[192px] top-[428px] left-[202px] font-["Poppins"] font-medium md:text-[64px] leading-[96px] text-black '>
            seater
          </h2>

          <button className='[w-[121px] h-[49px] top-[655px] text-black pl-[155px]'>
            <Link href={''}
              className='[w-[121px] ml-[-400px] h-[36px] top-[655px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black underline'
            >Shop Now</Link>
          </button>

        </div>
        {/* right side */}
        <div className='w-[80%] md:w-[700px] h-[90%] flex left-[1440px] mt-[-10px] '>
          <Image
            src={'/hero-img.png'}
            width={700}
            height={100}
            alt='img'
          />

        </div>

      </main>
    </section>
  )
}

export default Hero