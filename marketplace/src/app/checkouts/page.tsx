import Delivery from "@/components/Delivery";
import Navbar from "@/components/Navbar";
import Shophead from "@/components/Shophead";
import React from "react";
import { TbPointFilled } from "react-icons/tb";

const page = () => {
  return (
    <main>
      {/* checkout head components */}
      <section>
      <Navbar bgColor="bg-white"/>
        <Shophead headText="Check Outs" linkChange="Check" />
      </section>
      {/* check out main  */}
      <section className="flex w-full  h-[3000px]  md:w-[1347px]  md:h-[1829px] top-[416px]  flex-col items-center justify-center">
        <div className="flex flex-col  md:flex-row w-[90%] h-[90%]   items-center">
          {/* left side  */}
          <div className=" w-[80%] h-[50%] md:w-[50%] md:h-[95%] ">
            <div className="w-full  md:w-[608px] h-[630px] top-[479px] left-[100px] flex flex-col gap-10">
              <h2 className= 'w-[96%] md:w-[98%] h-[35px] top-[514px] left-[174px] font-["Poppins"] font-semibold text-[36px] leading-[54px] text-black'>
                Billing details
              </h2>

              <div className="flex-col w-[70%] md:flex-row md:w-[70%] md:h-[20%] flex items-center mt-10 md:gap-8 ">
                <div className="w-[45%]  flex flex-col" >
                  <label >Name</label>
                  <input
                    className=" w-[80%] h-[40px] md:w-[30%%] md:h-[64px] top-[987px] left-[172px] rounded-[15px] border-[1px] border-black text-black "
                    type="text"
                  />
                </div>
                <div className="w-[45%]  flex flex-col" >
                  <label >Last Name</label>
                  <input
                    className=" w-[80%] h-[40px] md:w-[30%%] md:h-[64px] top-[987px] left-[172px] rounded-[15px] border-[1px] border-black text-black "
                    type="text"
                  />
                </div>
                
              </div>

              <div className="w-[8px] md:w-[424px] md:h-[121px] top-[604px] left-[17px]">
                <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
                  Company Name Optional
                </h2>
                <input
                  className="h-[40px] md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
                  type="text"
                />
              </div>
              <div className="w-[8px] md:w-[424px] md:h-[121px] top-[604px] left-[175px]">
                <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
                  Country Region
                </h2>
                <input
                  className="h-[40px] md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
                  type="text"
                />
              </div>
              <div className="w-[8px] md:w-[424px] md:h-[121px] top-[604px] left-[175px]">
                <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
                  Street address
                </h2>
                <input
                  className="h-[40px] md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
                  type="text"
                />
              </div>
              <div className="w-[8px] md:w-[424px] md:h-[121px] top-[604px] left-[175px]">
                <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
                  Town City
                </h2>
                <input
                  className="h-[40px] md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
                  type="text"
                />
              </div>
              <div className="w-[8px] md:w-[424px] md:h-[121px] top-[604px] left-[175px]">
                <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
                  Province
                </h2>
                <input
                  className="h-[40px] md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
                  type="text"
                />
              </div>
              <div className="w-[8px] md:w-[424px] md:h-[121px] top-[604px] left-[175px]">
                <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
                  ZIP code
                </h2>
                <input
                  className="h-[40px] md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
                  type="text"
                />
              </div>
              <div className="w-[8px] md:w-[424px] md:h-[121px] top-[604px] left-[175px]">
                <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
                  Phone
                </h2>
                <input
                  className="h-[40px] md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
                  type="text"
                />
              </div>
              <div className="w-[8px] md:w-[424px] md:h-[121px] top-[604px] left-[175px]">
                <h2 className='w-[224px] h-[24px] top-[604px] left-[174px] font-["Poppins"] font-medium text-[16px] leading-[24px] text-black'>
                  Email address
                </h2>
                <input
                  className="h-[40px] md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
                  type="text"
                />
              </div>
              <div className="w-[8px] md:w-[424px] md:h-[121px] top-[604px] left-[175px]">
                
                <textarea

                  className="md:w-[423px] md:h-[75px] top-[650px] left-[176px] rounded-[10px] border-[1px] border-[#9F9F9F] text-black"
                  placeholder="Additional Information"
                  
                />
              </div>
              
            </div>
          </div>
          {/* left side  */}
          <div className="flex flex-col w-[80%] h-[50%] md:flex-row md:w-[50%] md:h-[90%]    justify-center ">
            <div className="w-[90%] h-[50%]  flex flex-col items-center gap-4">
                <div className=" md:w-[80%] md:h-[35%] border-b-[2px] border-black flex justify-between">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-2xl text-black">Product</h2>
                        <h3 className="text-gray-400">Asgoard sofa  X 1</h3>
                        <h3>Subtotal</h3>
                        <h3>Total</h3>
                    </div>
                    <div className="text-right flex flex-col gap-5 ">
                        <h2 className="text-2xl text-black">Subtotal</h2>
                        <h3 className="text-black">RS 250 000 00</h3>
                        <h3 className="text-black">RS 250 000 00</h3>
                        <h3 className="text-yellow-600">RS 250 000 00</h3>
                        
                    </div>

                </div>

                <div className="h-[99%] md:w-[80%] md:h-[100%] md:w-[80%] md:h-[50%] ">
                    <span className="flex ">
                        <span className="text-2xl "> <TbPointFilled/></span>
                        <h3>Direct Bank Transfer</h3>
                    </span>
                    <p className="w-full h-[15%] text-sm text-[#9F9F9F] ">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>

                    <span className="flex text-[#9F9F9F] ">
                        <input 
                        className="rounded-full border-sm border-black"
                        type="checkbox" />
                        <h3>Direct Bank Transfer</h3>
                    </span>
                    <span className="flex text-[#9F9F9F] ">
                        <input 
                        className="rounded-full border-sm border-black"
                        type="checkbox" />
                        <h3>Direct Bank Transfer</h3>
                    </span>
                    <p className="w-full h-[15%] text-sm text-[#9F9F9F] ">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
                    <h2 className="font-bold text-black"> privacy policy.</h2>
                    </p>




                    <div className="w-[90%]   mt-10 flex items-center justify-center ">
                    <button className="w-[80%] border-[2px] border-black rounded-xl py-4 border-xl border-black hover:bg-[#FBEBB5]">Place order</button>
                    </div>
                </div>

            </div>


          </div>
        </div>
      </section>
      {/* delivery conponents */}
      <section>
        <Delivery/>
      </section>
    </main>
  );
};

export default page;
