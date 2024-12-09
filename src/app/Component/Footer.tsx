import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w -[1440px]'>
      <div className='h-[488px] w -[1440px]'>
        <div className='h-[142px] w -[1440px]   '>
       <div className='h-[138px]  py-[40px]  mx-56'>
        <div className='h-[58px] gap-[577.7px] flex justify-between items-center'>
        <h1 className='font-bold text-[24px] h-[32px] w-[108px] text-[#252B42]'>Bandage </h1>
        <Image className='mr-52'src={"/image/social media.png "} alt='social' height={24} width={112}/>
    

       </div>
       </div>
       </div>
       

        <div className='h-[272px] top-[142px] bg-[#FFFFFF]  flex w -[1440px]'>
        <div className='h-[270px] left-[195px] w-[1050px] py-[50px] mx-56 flex '>
           
          <div className='h-[170px] w-[148px]   '>
            <h1 className='text-[16px] font-bold '>Company Info</h1>
            <h1 className='text-[14px] font-bold mt-4'>About Us</h1>
            <h1  className='text-[14px] font-bold mt-4'>Carrier</h1>
            <h1  className='text-[14px] font-bold mt-4'>We are hiring</h1>
            <h1  className='text-[14px] font-bold mt-4'>Blog</h1>
            </div>

            <div className='h-[170px] w-[152px] '>
            <h1 className='text-[16px] font-bold '>Legal</h1>
            <h1 className='text-[14px] font-bold mt-4'>About Us</h1>
            <h1  className='text-[14px] font-bold mt-4'>Carrier</h1>
            <h1  className='text-[14px] font-bold mt-4'>We are hiring</h1>
            <h1  className='text-[14px] font-bold mt-4'>Blog</h1>
             </div>

            
          

             <div className='h-[170px] w-[148px] '>
          <h1 className='text-[16px] font-bold '>Features</h1>
        <h1 className='text-[14px] font-bold h-[24px] w-[142px] mt-3'>Business Marketing</h1>
        <h1  className='text-[14px] font-bold mt-4'>User Analytic</h1>
        <h1  className='text-[14px] font-bold mt-4'>Live Chat</h1>
        <h1  className='text-[14px] font-bold mt-4'>Unlimited Support</h1>
         </div>

         

          
         <div className='h-[170px] w-[152px] '>
          <h1 className='text-[16px] font-bold'>Resources</h1>
        <h1 className='text-[14px] font-bold mt-4'>IOS & Android</h1>
        <h1  className='text-[14px] font-bold mt-4'>Watch a Demo</h1>
        <h1  className='text-[14px] font-bold mt-4'>Customers</h1>
        <h1  className='text-[14px] font-bold mt-4'>API</h1>
         </div>
            

          
         <div className='h-[131px] w-[321px] '>
          <h1 className='text-[16px] font-bold'>Get In Touch</h1>
          <div className='flex justify-between items-center'>
          <h1 className='text-[14px] font-bold '>Your Email</h1>
          <button ></button>
          <button className='bg-[#23A6F0] border-[1px] rounded-t-[5px] rounded-b-[5px] h-[58px] w-[117px] text-[14px]'>Subscribe</button>
          </div>
         <h1  className='text-[12px] font-bold h-[28px] w-[155px]'>Lore imp sum dolor Amit</h1>
          </div>

          </div>
          </div> 

          <div className='h-[74px]  py-[25px] mx-56'>
            <p className='font-bold text-[14px] w-[336px] '>Made With Love By Finland All Right Reserved </p>

          </div>
         


      </div>







    </div>
  )
}

export default Footer
