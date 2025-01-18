import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div >

      <div className='bg-[#252B42] h-[58px] pt-1 gap-5 ' >

       <div className='h-[46px] top-[9px] left-[2px] text-[#FFFFFF] flex ml-8 '>
        <div className=' h-[44px]  p-[10px] text-[#FFFFFF] flex  ' >
          <Image src={"/image/Vector (9).png"} alt='vote' height={16} width={16}/>
        <h1 className='h-[24px] w-[104px] text-[12px]'>(225) 555-0118</h1>
        </div>
      
         <div  className=' h-[44px] w-[160px] flex p-[10px] gap-[5px]'>
       <Image src={"/image/Vector (10).png"} alt='vote' height={12} width={14}/>
       <p className='font-bold text-[14px] top-[2px] text-[#FFFFFF] h-[24px] w-[219px] '>michelle.rivera@example.com</p>
       </div> 
        
        <div className=' pt-5  flex justify-end items-center  ml-44 h-[24px] w-[332px]'>
       <p className='h-[24px] w-[312px] font-bold text-[14px] '>Follow Us  and get a chance to win 80% off</p>
       </div>

       <div className='h-[46px] w-[233px] p-[10px] flex ml-[370px]  '>
        <h1 className='h-[24px] w-[83px]  '>Follow Us  :</h1>
        <Image src={"/image/social media (1).png"} alt='media' height={26} width={120}/>

      </div>
      </div>
      </div>
        {/* white space nav */}
      <div className='h-[58px] top-[70px] border-3 border-black flex pt-5 '>
        <h1 className='font-bold text-[24px] h-[32px] w-[108px] ml-8'>Bandage</h1>

        <div className='h-[24px] w-[44px] flex gap-3'>
        <ul className=' ml-44 flex justify-center items-center space-x-4 pt-5'>
          <li  className='font-bold text-[14]'><Link href="/">Home</Link></li>
          <li  className='font-bold text-[14]'><Link href="Shop">Shop</Link></li>
          <Image  src={"/image/Vector (12).png"} alt='ser' height={10} width={5.71}/>
          <li className='font-bold text-[14]'><Link href="About">About</Link></li>
          <li className='font-bold text-[14]'><Link href="blog">Blog</Link></li>
          <li className='font-bold text-[14]'><Link href="Contact">Contact</Link></li>
          <li className='font-bold text-[14]'><Link href="pages">Pages</Link></li>
        </ul>  
       
        </div>
    
        <Image className='ml-[900px]' src={"/image/navbar-nav.png"} alt='nav' height={54} width={324}/>
        
      </div>

 



    </div>
  )
}

export default Navbar
