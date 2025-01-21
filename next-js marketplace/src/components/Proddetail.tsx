import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Proddetail = () => {
  return (
    <main className='flex flex-col w-full h-[650px] justify-center items-center md:flex-row md:h-[690px] mt-[-60px] top-[2389px] left-[-36px] bg-[#FFF9E5]     '>
        {/* img sec*/}

        <div className='w-[80%] md:w-[883px] top-[239px] mt-[-40px] left-[-36px]    '>
            <Image
            src={'/proddetail-pro-1.png'}
            width={883}
            height={599}
            alt='img'
            />

        </div>


        {/* text sec */}

        <div className='w-[80%]  md:w-[331px] md:h-[205px] md:top-[2686px] left-[1012px] text-black md:mt-[230px] ml-10 space-y-8 '>
            <div className='w-[80%] h-[210px] md:w-[331px] md:h-[108px] top-[2686px] left-[1012px] text-black '>
                <p className='w-[149px] h-[36px] top-[2686px] left-[1103px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black ml-[50px]'>New Arrivals</p>
                <h2 className='w-[240px] md:w-[331px] h-[72px] top-[2722px] left-[1012px] font-["Poppins"] font-bold text-[48px] leading-[72px] text-black'>Asgaard sofa</h2>

            </div>
            {/* button */}
            <div className='w-[70%] h-[64px] top-[2827px] left-[1050px] text-black hover:bg-[#FBEBB5] border border-[1px] border-black ml-[30px] flex items-center justify-center'>
               <Link href={'/singleProduct'}> <button  className='w-[106px] h-[30px] top-[2844px]  left-[1125px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-black'>
                Order Now
                </button></Link>

            </div>

        </div>
    </main>
  )
}

export default Proddetail