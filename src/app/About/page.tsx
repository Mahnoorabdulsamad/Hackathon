import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='w-[1440px] h-[729px] flex bg-[#FFFFFF] '>
      <div className='h-[321px] w-[1044px] gap-[30px]  mt-52 ml-32'>
     
        <h5 className='font-bold text-[16px] '>ABOUT COMPANY</h5>
        <h1 className='font-bold text-[58px] mt-3'>ABOUT US</h1>
        <p className='font-normal text-[20px] h-[60px] w-[376px] mt-3'>We know how large objects will act, 
        but things on a small scale</p> 
        <button className='bg-[#23A6F0] w-[195px] h-[52px] py-[15px] px-[40px] rounded-[5px] text-white text-[14px] mt-3'>Get Quote Now</button>

      </div>
        <Image src={"/image/background.png"} alt='back' width={740} height={729} />
        </div> 

        {/* text  */}
        <div className='h-[236px] w-[1440px] bg-[#FFFFFF]  flex '>
          <div className='h-[188px] w-[394px] py-[24px]  mx-56 mt-5 ' >
            <h1 className=' text-[#E74040] text-[14px]'>Problems trying</h1>
            <p className='text-[#252B42] font-bold text-[24px] w-[394px] h-[96px]'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
           
          </div>
          <div className='w-[545px] h-[40px] gap-[49px]'>
            <p className='text-[14px] font-normal mt-24'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>

          </div>
        </div>

        <div className='h-[264px] w-[1440px] bg-[#FFFFFF]   '>
          <div className='h-[264px] w-[1050px] py-[80px] mx-56 '>

           <div className='h-[104px] w-[1049px] flex justify-center items-center '>
            <div className='h-[104px] w-[238px] ml-14'>
             <h1 className='font-bold text-[58px]'>15K</h1>
            <p className='font-bold text-[16px]'>Happy Customers</p>
              </div>

              <div className='h-[104px] w-[241px] ml-14'>
                 <h1 className='font-bold text-[58px]'>150K</h1>
            <p className='font-bold text-[16px]'> Monthly Visitors</p>
              </div>

              <div className='h-[104px] w-[240px] ml-14'>
                 <h1 className='font-bold text-[58px]'>15K</h1>
            <p className='font-bold text-[16px] '> Countries  Worldwide</p>
              </div>

              <div className='h-[104px] w-[240px] ml-14'>
                 <h1 className='font-bold text-[58px] '>100+</h1>
            <p className='font-bold text-[16px]'> Top Partners</p>
              </div>
              </div>
            </div>

           
        </div>
  
      
        <div className='h-[764px] w-[1440px] bg-[#FFFFFF] '>
              <div className='h-[764px] w-[1050px]  mx-56'>
                <Image className="mt-28" src={"/image/Video card (1).png "} alt='video' height={540} width={989}/>

              </div>

            </div>



















        </div>
      

  )
}

export default page
