import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";








const Ourblog = () => {
  return (
    <main className=' py-10 w-full top-[3108] text-black flex flex-col items-center    '>
        {/* headings sec */}
    
        <div className='w-[80%] md:w-[479] md:h-[91px] top-[3163px] left-[480px] flex flex-col items-center text-center '>
            <h2 className='w-[174px] h-[54px] top-[3163px] left-[633px] font-["Poppins"] font-medium text-[36px] leading-[54px] text-black '>Our Blogs</h2>
            <p className=' w-[90%] md:w-[479px] h-[24px] top-[3230px] left-[480px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-[#9F9F9F]'>
            Find a bright ideal to suit your taste with our great selection
            </p>

        </div>
        
        {/* ................................. */}

        {/* products and button sec */}
        <div className=' w-full md:w-[1240px] md:h-[679px] top-[3319px] left-[100px] flex flex-col items-center justify-around   '>
            {/* products  */}
            <div className='flex-col  w-full  md:flex-row md:w-[1240px] md:h-[555px] top-[3319px] left-[100px] flex gap-x-4   '>
                {/* product-1 */}
                <div className='flex flex-col  items-center text-center'>
                    {/* img */}
                    <div className='w-[80%] h-[250px] py-5 md:w-[393px] md:h-[393px] top-[3319px] left-[100px] rounded-[10px]   '>
                        <Image
                        src={'/blog-img-1.png'}
                        width={393}
                        height={393}
                        alt='img'
                        
                        />

                    </div>
                    {/* headings */}
                    <div className=' md:w-[339px] md:h-[129px] mt-4 top-[3745px] left-[127px]    '>
                        <p className='w-[100%] md:w-[339px] h-[30px] top-[3745px] left-[127px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-black'>Going all-in with millennial design</p>
                        <button className='w-[130px] h-[46px] top-[3785px] left-[231px] text-black border-b-[2px] border-black'>
                            <Link href={'/blog'}>Read More</Link>
                        </button>
                        {/* dates */}
                        <div className='w-[223px] h-[24px] top-[3850px] left-[185px] text-black ml-[80px] flex'>
                            <span className='w-[73px] h-[24px]  my-5 top-[3850px] left-[185px]  text-black flex'>
                                 <span className='mt-1 pr-1'> <MdOutlineWatchLater /></span>
                                 <span className='w-[99px] h-[24px] top-[3850px] left-[309px] font-["Poppins"] font-light text-[16px] leading-[24px] text-black'>5 min</span>
                            </span>
                            <span className='w-[131px] h-[24px]  my-5 top-[3850px] left-[277px] flex'>
                                <span className='mt-1 pr-1'> <CiCalendarDate/></span>
                                <span className='w-[99px] h-[24px] top-[3850px] left-[309px] font-["Poppins"] font-light text-[16px] leading-[24px] text-black'>12th Oct 2022</span>


                            </span>

                        </div>

                    </div>
                </div>
                
                {/* product-2 */}
                <div className='flex flex-col items-center text-center'>
                    {/* img */}
                    <div className='w-[80%] h-[250px] py-5 md:w-[393px] md:h-[393px] top-[3319px] left-[100px] rounded-[10px]  '>
                        <Image
                        src={'/blog-img-2.png'}
                        width={393}
                        height={393}
                        alt='img'
                        
                        />

                    </div>
                    {/* headings */}
                    <div className='w-[339px] h-[129px] mt-4 top-[3745px] left-[127px]'>
                        <p className='w-[339px] h-[30px] top-[3745px] left-[127px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-black'>Going all-in with millennial design</p>
                        <button className='w-[130px] h-[46px] top-[3785px] left-[231px] text-black border-b-[2px] border-black'>
                            <Link href={'/blog'}>Read More</Link>
                        </button>
                        {/* dates */}
                        <div className='w-[223px] h-[24px] top-[3850px] left-[185px] text-black ml-[80px] flex'>
                            <span className='w-[73px] h-[24px]  my-5 top-[3850px] left-[185px]  text-black flex'>
                                 <span className='mt-1 pr-1'> <MdOutlineWatchLater /></span>
                                 <span className='w-[99px] h-[24px] top-[3850px] left-[309px] font-["Poppins"] font-light text-[16px] leading-[24px] text-black'>5 min</span>
                            </span>
                            <span className='w-[131px] h-[24px]  my-5 top-[3850px] left-[277px] flex'>
                                <span className='mt-1 pr-1'> <CiCalendarDate/></span>
                                <span className='w-[99px] h-[24px] top-[3850px] left-[309px] font-["Poppins"] font-light text-[16px] leading-[24px] text-black'>12th Oct 2022</span>


                            </span>

                        </div>

                    </div>
                </div>

                {/* product-3 */}
                <div className='flex flex-col items-center text-center'>
                    {/* img */}
                    <div className='w-[80%] h-[250px] py-5 md:w-[393px] md:h-[393px] top-[3319px] left-[100px] rounded-[10px]      '>
                        <Image
                        src={'/blog-img-3.png'}
                        width={393}
                        height={393}
                        alt='img'
                        
                        />

                    </div>
                    {/* headings */}
                    <div className='w-[339px] h-[129px] mt-4 top-[3745px] left-[127px]'>
                        <p className='w-[339px] h-[30px] top-[3745px] left-[127px] font-["Poppins"] font-normal text-[20px] leading-[30px] text-black'>Going all-in with millennial design</p>
                        <button className='w-[130px] h-[46px] top-[3785px] left-[231px] text-black border-b-[2px] border-black'>
                            <Link href={'/blog'}>Read More</Link>
                        </button>
                        {/* dates */}
                        <div className='w-[223px] h-[24px] top-[3850px] left-[185px] text-black ml-[80px] flex'>
                            <span className='w-[73px] h-[24px]  my-5 top-[3850px] left-[185px]  text-black flex'>
                                 <span className='mt-1 pr-1'> <MdOutlineWatchLater /></span>
                                 <span className='w-[99px] h-[24px] top-[3850px] left-[309px] font-["Poppins"] font-light text-[16px] leading-[24px] text-black'>5 min</span>
                            </span>
                            <span className='w-[131px] h-[24px]  my-5 top-[3850px] left-[277px] flex'>
                                <span className='mt-1 pr-1'> <CiCalendarDate/></span>
                                <span className='w-[99px] h-[24px] top-[3850px] left-[309px] font-["Poppins"] font-light text-[16px] leading-[24px] text-black'>12th Oct 2022</span>


                            </span>

                        </div>

                    </div>
                </div>

            </div>
            {/* products sec end.......................... */}
            {/* button  */}
            <div>
            <button  className='w-[104px] h-[30px] top-[2340px] left-[667px] text-black font-["Poppins"] font-medium text-[20px] leading-[30px] '>
                <Link href={'/blog'} >View More</Link> 
            </button>
            <div className='w-[115px] top-[2389px] left-[662px] border border-[2px] border-black'></div>
            </div>

        </div>

    </main>
  )
}

export default Ourblog