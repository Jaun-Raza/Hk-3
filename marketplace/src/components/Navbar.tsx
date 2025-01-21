
import Link from 'next/link'
import React from 'react'
import { MdManageAccounts, MdOutlineShoppingCart  } from "react-icons/md";
import { CiSearch, CiHeart  } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";


const Navbar = (props:any) => {
  return (
    <header className={`w-full   sm:w-full md:w-full   mmd:h-[100px] ${props.bgColor} flex justify-end gap-x-[90px] items-center pr-[99px]     `}>
 
        <nav className='invisible md:visible md:pl-5 w-[430px] h-[24px] top-[38px] left-[505px] text-black '>
            <ul className='w-[48] h-[24] top-[38px] left-[505] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black flex justify-between'>
                <li> <Link href={'/'}>Home</Link> </li>
                <li> <Link href={'/shop'}>Shop</Link> </li>
                <li> <Link href={'/blog'}>About</Link> </li>
                <li> <Link href={'/contact'}>Contact</Link> </li>
            </ul>

        </nav>
    
        <div >
            <div className='w-[70%] sm:w-[247px] h-[28px] top-[36px] left-[1093px] flex gap-x-10'>
                <span className=' invisible xs:visible w-[28px]  h-[28px] top-[36px] left-[1093px] text-[35px]'> <Link href={'myaccount'}> <MdManageAccounts /> </Link> </span>
                <span className=' invisible xs:visible w-[28px]  h-[28px] top-[36px] left-[1093px] text-[35px] '><CiSearch /></span>
                <span className=' invisible xs:visible w-[28px]  h-[28px] top-[36px] left-[1093px] text-[35px]'> <Link href={'/checkouts'}> <CiHeart  /> </Link> </span>
                <button className=' text-4xl md:hidden'> <IoMenu/> </button>


            </div>
        </div>
     

    </header>
  )
}

export default Navbar