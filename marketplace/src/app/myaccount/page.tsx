import Delivery from "@/components/Delivery";
import Navbar from "@/components/Navbar";
import Shophead from "@/components/Shophead";
import React from "react";

const page = () => {
  return (
    <main>
      {/* account */}
      <div>
      <Navbar bgColor="bg-white"/>
        <Shophead headText="My Account" linkChange="My account" />
      </div>
      {/* contact */}
      <div className="flex flex-col md:flex-row md:w-[1347px] md:h-[760px] top-[416px] items-center justify-center ">
        {/* login */}
        <div className="w-[80%] h-[50%] gap-2 md:w-[608px] md:h-[630px] top-[479px] left-[100px] flex flex-col md:gap-4">
          <h2 className='w-[107px] h-[54px] top-[514px] left-[174px] font-["Poppins"] font-semibold text-[36px] leading-[54px] text-black'>
            Log In
          </h2>

          <div className="w-[80%] h-[122px] md:w-[424px] md:h-[121px] top-[604px] left-[17px]">
            <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
              Username or email address
            </h2>
            <input
              className=" md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
              type="text"
            />
          </div>
          <div className="w-[80%] h-[122px] md:w-[424px] md:h-[121px] top-[604px] left-[175px]">
            <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
              Password
            </h2>
            <input
              className="md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
              type="text"
            />
          </div>
          <span className="flex ml-3 gap-5">
            <input
              className="w-[30px] h-[27px] top-[924px] left-[176px] rounded-[5px] border-[1px] border-[#9F9F9F] text-black"
              type="checkbox"
            />
            <h2 className='w-[120px] h-[24px] top-[925px] left-[227px] font-["Poppins"] font-normal text-[16px] leading-[24px] text-black'>
              Remember me
            </h2>
          </span>

          <div className="flex flex-col md:flex-row items-center mt-10 gap-8">
            <button className="w-[215px] h-[64px] top-[987px] left-[172px] rounded-[15px] border-[1px] border-black text-black  hover:bg-gray-200 ">
              Log In
            </button>
            <h2 className='w-[160px] h-[24px] top-[1010px] left-[418px] font-["Poppins"] font-light text-[16px] leading-[24px] text-black'>
              Lost Your Password?
            </h2>
          </div>
        </div>
{/* right side  */}

        <div className="w-[80%]  md:w-[608px]  md:h-[630px] top-[479px] left-[734px] flex flex-col gap-4">
          <h2 className='w-[151px] h-[54px] top-[514px] left-[809px] font-["Poppins"] font-semibold text-[36px] leading-[54px] text-black'>
            Register
          </h2>
          <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
            Username or email address
          </h2>
          <input
            className="w-[90%] h-[40px] md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
            type="text"
          />

          <div>
            <h2 className='md:w-[453px] h-[48px] top-[761px] left-[811px] font-["Poppins"] font-light text-[16px] leading-[24px] text-black'>
              A link to set a new password will be sent to your email address.
            </h2>
            <h2 className='md:w-[453px] h-[96px] top-[827px] left-[811px] font-["Poppins"] font-light text-[16px] leading-[24px] text-black'>
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our
              <h2 className="font-bold"> privacy policy.</h2>
            </h2>

            <div className="flex items-center mt-10 ">
              <button className="w-[80%] h-[45px] ml-6 md:ml-0 md:w-[215px] md:h-[64px] top-[987px] left-[172px] rounded-[15px] border-[1px] border-black text-black  hover:bg-gray-200">
              Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* delivery */}
      <div>
        <Delivery />
      </div>
    </main>
  );
};

export default page;
