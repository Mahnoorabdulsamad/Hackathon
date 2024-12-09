import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>


                 <div className="h-[742px] w-[1050px] bg-[#FFFFFF] flex  mx-56 sm:">
  <div className="h-[518px] w-[1050px] gap-[30px]  mt-20 ">
    <h1 className="font-bold text-[16px] h-[24px] w-[108px] mt-8">CONTACT US</h1>
    <h1 className="font-bold text-[58px] h-[160px] w-[378px] mt-8">Get in touch today!</h1>
    <p className="text-[20px] font-normal h-[60px] w-[376px] mt-8">We know how large objects will act, 
      but things on a small scale</p>
    <h1 className="text-[24px] font-bold h-[32px] sm:text-2xl mt-8">Phone ; +451 215 215 </h1>
    <h1 className="text-[24px] font-bold h-[32px] mt-2 sm:text-2xl">Fax : +451 215 215</h1>
    <Image className="mt-8" src={"/image/sm.png"} alt="sm" height={50} width={242} />
  </div>
  
  {/* For the 'family.png' image */}
  
   <Image
    className=" h-[550px] w-[650px] mt-16 ml-40"
    src="/image/family.png"
    alt="family"
    height={400} // Height of the image
    width={550} // Set the width to match the parent container's width
  /> 
 </div> 
          <div className='h-[814px] w-[1440px] bg-[#FFFFFF]'>
            <div className='h-[814px] w-[1050px] py-[112px] gap-[80px] mx-56'> 
              <div className='flex justify-center items-center flex-col'>
              <h1 className='h-[24px] font-bold text-[14px] w-[132px]'>VISIT OUR OFFICE</h1>
              <p className=' font-bold text-[40px] '>We help small businesses  </p>
              <p className=' font-bold text-[40px] '>with big ideas</p>
              </div>

              <div className='h-[403px] w-[985px] mx-7 flex'>
                {/* 1ts  */}
                <div className='h-[343px] w-[328px]  py-[50px] px-[40px] gap-[15px] flex  flex-col justify-center items-center '>
                  <div >
                 <Image  className='mx-[70px]' src={"/image/Vector (5).png"} alt="phone" height={72} width={72} />
                 <h1 className='ml-6 font-bold text-[14px] h-[24px] w-[226px]'> georgia.young@example.com</h1>
                 <h1 className='ml-12 font-bold text-[14px]  w-[176px] '>georgia.young@ple.com</h1>
                 <h1 className='ml-20 font-bold text-[16px] h-[24px] w-[100px]'>Get Support</h1></div>
                 <div className='h-[54px] w-[189px] rounded-[37px] border-[1px] py-[15px] px-[36px] border-[#23A6F0] mt-7'>
                  <button className=' text-[#23A6F0] text-[14px]  '>Submit Request</button>
                  </div>
                </div>
                {/* 2nd */} 
                <div className='h-[403px] w-[328px] bg-[#252B42] py-[50px] px-[40px] gap-[15px]  text-white flex  flex-col justify-center items-center'>
                  <div >
                 <Image className='mx-[70px]' src={"/image/Vector (6).png"} alt="phone" height={72} width={72} />
                 <h1 className='  ml-6 font-bold text-[14px] h-[24px] w-[226px]'> georgia.young@example.com</h1>
                 <h1 className='ml-12 font-bold text-[14px]  w-[176px] '>georgia.young@ple.com</h1>
                 <h1 className='ml-20 font-bold text-[16px] h-[24px] w-[100px]'>Get Support</h1></div>
                 <div className='h-[54px] w-[189px] rounded-[37px] border-[1px] py-[15px] px-[36px] border-[#23A6F0] mt-7'>
                  <button className=' text-[#23A6F0] text-[14px] '>Submit Request</button>
                  </div>
                </div>

                {/* 3rd */}
                <div className='h-[343px] w-[328px]  py-[50px] px-[40px] gap-[15px] flex flex-col justify-center items-center  '>
                  <div >
                 <Image className='mx-[70px]' src={"/image/Vector (3).png"} alt="phone" height={72} width={72} />
                 <h1 className='ml-6 font-bold text-[14px] h-[24px] w-[226px]'> georgia.young@example.com</h1>
                 <h1 className='ml-12 font-bold text-[14px]  w-[176px] '>georgia.young@ple.com</h1>
                 <h1 className='ml-20 font-bold text-[16px] h-[24px] w-[100px]'>Get Support</h1></div>
                 <div className='h-[54px] w-[189px] rounded-[37px] border-[1px] py-[15px] px-[36px] border-[#23A6F0] mt-7'>
                  <button className=' text-[#23A6F0] text-[14px] '>Submit Request</button>
                  </div>
                </div>

              </div>

            </div> 
            
          </div>
            
          <div className='h-[348px] bg-[#FFFFFF]  '>
            <div className='h-[348px] w-[1050px] py-[80px] gap-[96px]  mx-56 left-[195px] flex'>
              <div className='h-[188px] w-[272px] gap-[16px]  mx-96  '>
                <h1 className='font-bold text-[16px] ml-5'>WE Can &APOS; WAIT TO MEET YOU</h1>
                <h1 className='font-bold text-[58px]'>Let &APOS; Talk</h1>
                <div className='h-[55px] w-[186px] rounded-[5px] py-[15px] px-[50px] bg-[#23A6F0] gap-[10px] ml-10'>
                <button className=' text-white font-bold text-[10px] w-[106] h-[22px]'>Try it free  now</button>
                </div>

              </div>

            </div>

          </div>

 
    </div>
  )
}

export default page



