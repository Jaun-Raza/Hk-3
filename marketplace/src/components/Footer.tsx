import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' w-full h-[1100px]  md:h-[400px]  mmd:h-[555px] top-[4497px]  flex items-center justify-around  '>
        <main className=' w-[80%] md:w-full  mmd:w-[1240.01px] mmd:h-[419px] top-[4595px] left-[100px] flex flex-col items-center justify-center '>
            {/* upper side */}
            <div className='flex-col mmd:flex-row w-[70%] md:w-full mmd:w-[1132px] h-[312px] top-[4595px] left-[102.01px] flex items-center '>
                {/* left  side */}
                <div className='w-[285px] h-[72px]  top-[4703px] left-[102.01px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-[#9F9F9F] mx-10'>
                400 University Drive Suite 200 Coral Gables,
                FL 33134 USA

                </div>

                {/* right side */}
                <div className='flex-col w-[70%] md:flex-row  mmd:w-[710px] md:h-[312px] top-[4595px] left-[523.01px] text-black flex space-x-[100px] ml-10  '>
                    {/* col-1 */}
                    <div className='hidden md:visible w-[68px] h-[312px] top-[4595px] left-[523.01px] space-y-9'>
                        <h3 className='w-[40px] h-[24px] top-[4595px] left-[523.10px] font-["Poppins"]  font-medium text-[16px] leading-[24px] text-[#9F9F9F]'>Links</h3>
                        <ul className='w-[66px] h-[233px] top-[4674px] left-[525.01px] space-y-9  text-black'>
                            <li> <Link href={'/'} className='w-[48px] h-[24px] top-[4674px] left-[525.01px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Home</Link> </li>
                            <li> <Link href={'/shop'} className='w-[48px] h-[24px] top-[4674px] left-[525.01px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Shop</Link> </li>
                            <li> <Link href={'/about'} className='w-[48px] h-[24px] top-[4674px] left-[525.01px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>About</Link> </li>
                            <li> <Link href={'/contact'} className='w-[48px] h-[24px] top-[4674px] left-[525.01px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Contact</Link> </li>
                        </ul>

                    </div>
                    {/* col-2 */}
                    <div className=' w-[80%]  md:w-[140px] h-[242px] top-[4595px] space-y-9 left-[735.01px]'>
                        <h3 className=' md:w-[40px] h-[24px] top-[4595px] left-[523.10px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-[#9F9F9F]'>Help</h3>
                        <ul className=' md:w-[140px] h-[163px] top-[4674px] left-[735.01px] space-y-9 text-black'>
                            <li> <Link href={'/'} className='w-[48px] h-[24px] top-[4674px] left-[525.01px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Payment Options</Link> </li>
                            <li> <Link href={'/shop'} className='w-[48px] h-[24px] top-[4674px] left-[525.01px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Returns</Link> </li>
                            <li> <Link href={'/about'} className='w-[48px] h-[24px] top-[4674px] left-[525.01px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>Privacy Policies</Link> </li>
                            
                        </ul>

                    </div>
                    {/* col-3 */}
                    <div className='hidden md:visible w-[70%] md:w-[286px] h-[101px] top-[4597px]  left-[947.01px]'>
                        <h3 className='w-[86px] h-[24px] top-[4597px] left-[947.10px] mb-9 font-["Poppins"] font-medium text-[16px] leading-[24px] text-[#9F9F9F]'>Newsletter</h3>
                        <span className='w-[286px] h-[24px] top-[4674px] left-[947.01px] border border-b-[1px] border-black'>
                        <input type="email" placeholder='Enter Your Email Address'
                         className=' w-[40%] md:w-[173px] h-[21px] top-[4595px] left-[947.10px] font-["Poppins"] font-normal text-[14px] leading-[21px] text-[#9F9F9F]  border-none'
                        />
                        <button className='w-[75px] h-[21px] top-[4595px] left-[1158.10px] font-["Poppins"] font-medium text-[14px] leading-[21px] text-black border border-b-[1px] border-black'>SUBSCRIBE</button>

                        </span>

                    </div>
                    {/*  .......... */}

                </div>

            </div>
            {/* down side  */}
            <div className='invisible md:visible md:w-[1100px] h-[59px] top-[4955px] left-[100px] border-t-[1px] border-[#D9D9D9] flex items-center ml-[180px]'>
                <div></div>
                <h3 className='w-[50%] md:w-[306px] h-[24px] top-[4990px] left-[102.01px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black '>2022 Meubel House. All rights reverved</h3>

            </div>

        </main>

    </footer>
  )
}

export default Footer