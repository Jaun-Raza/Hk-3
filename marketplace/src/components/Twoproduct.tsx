import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Twoproduct = () => {
  return (
    <main className='flex flex-col w-full md:flex-row md:h-[672px] top-[996px] p-5 justify-around '>

        {/* right side */}
        <div className='w-[90%]  md:w-[605px] md:h-[562px] top-[1047px] left-[100px]  '>
            <div className='w-[80%] h-[200px] md:w-[592px] md:h-[441px] top-[122px] left-[-54px] font-["Poppins"] '>
                <Image 
                src={'/product-1.png'}
                width={641}
                height={122}
                alt='img'
                />

            </div>

            <div>
                <h2 className='w-[182px] h-[54px] top-[1430px] left-[205px] font-["Poppins"] font-normal text-[40px] leading-[54px] text-black'>Side table</h2>
            </div>
            <button className='[w-[182px] h-[54px] top-[1355px] text-black '>
                <Link href={''}
                className='[w-[181px]  h-[36px] top-[655px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black underline '
                >View More</Link>
            </button>


        </div>




        {/* left side */}

        <div className='w-[90%]  md:w-[605px] md:h-[562px] top-[1047px] left-[100px]  '>
            <div className='w-[80%] h-[200px] md:w-[592px] md:h-[441px] top-[122px] left-[-54px] '>
                <Image 
                src={'/product-2.png'}
                width={641}
                height={122}
                alt='img'
                />

            </div>

            <div>
                <h2 className='w-[182px] h-[54px] top-[1430px] left-[205px] font-["Poppins"] font-normal text-[40px] leading-[54px] text-black'>Side table</h2>
            </div>
            <button className='[w-[182px] h-[54px] top-[1355px] text-black '>
                <Link href={''}
                className='[w-[181px]  h-[36px] top-[655px] font-["Poppins"] font-medium text-[24px] leading-[36px] text-black underline '
                >View More</Link>
            </button>


        </div>








    </main>
  )
}

export default Twoproduct