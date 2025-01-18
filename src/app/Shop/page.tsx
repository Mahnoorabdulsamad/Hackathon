import Image from "next/image";
import React from "react";

const Shop = () => {
  return (
    <div >
      <div className="h-[92px] w-full py-[24px] bg-[#FAFAFA] flex">
        <h1 className="font-bold text-[24px] ml-10 ">Shop</h1>
        <div className="h-[44px] flex items-center ml-auto mr-10 gap-2">
          <h1 className="font-bold text-[14px]">Home</h1>
          <Image
            src="/image/icn arrow-right icn-xs (1).png"
            alt="arrow-right"
            height={16}
            width={9}
          />
          <h1 className="font-bold text-[14px]">Shop</h1>
        </div>
      </div>

      <div className="h-[271px] w-[1088px] pb-[48px]  gap-[15px] mx-auto">
        <Image src="/image/row.png" alt="row" height={270} width={1088} />
      </div>

      <div className="h-[98px]  bg-[#FFFFFF] flex justify-center items-center">
        <div className="h-[98px] w-[1050px] py-[24px] gap-[80px] flex justify-between items-center">
          <h1 className="font-bold text-[14px] h-[24px] w-[166px]">
            Showing all 12 results
          </h1>

          <Image
            className="px-[1px]"
            src="/image/sort.png"
            alt="sort"
            height={46}
            width={177}
          />

          {/* Container for dropdown and Filter button */}
          <div className="flex items-center gap-4">
            {/* Dropdown Container */}
            <div className="h-[50px] w-[141px] rounded-[5px] border-[1px] bg-[#F9F9F9] flex justify-between items-center px-3">
              <button className="text-[#737373] text-[14px] w-[74px] h-[28px]">
                Popularity
              </button>
              <Image
                src={"/image/Vector (12).png"}
                alt="ser"
                height={10}
                width={5.71}
              />
            </div>

            {/* Filter Button */}
            <button className="h-[50px] w-[94px] bg-[#23A6F0] text-[14px] font-bold rounded-[5px] border-[1px]">
              Filter
            </button>
          </div>
        </div>
      </div>

      <Image
        src={"/image/desktop-clients-1.png"}
        alt="ser"
        height={175}
        width={1440}stify-between
      />

    

<div className="h-[1778px]  bg-[#FFFFFF]  flex flex-col">

  <div className="h-[488px] w-[1048px] flex justify-center items-center mx-56 mt-20">
    
    <div className="h-[488px] w-[238px]   ">
      <Image src={"/image/fixed-height (1).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

    <div className="h-[488px] w-[238px]  ">
      <Image src={"/image/fixed-height (2).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

    <div className="h-[488px] w-[238px]  ">
      
      <Image src={"/image/fixed-height (3).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

    <div className="h-[488px] w-[238px]  ">
      <Image src={"/image/fixed-height (4).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center ">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

  </div>

           {/* second */}
           <div className="h-[488px] w-[1048px] flex justify-center items-center mx-56  mt-20 ">
    
    <div className="h-[488px] w-[238px]  ">
      <Image src={"/image/fixed-height (5).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10" src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

    <div className="h-[488px] w-[238px] ">
      <Image src={"/image/fixed-height (6).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

    <div className="h-[488px] w-[238px]  ">
      
      <Image src={"/image/fixed-height (7).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

    <div className="h-[488px] w-[238px]  ">
      <Image src={"/image/fixed-height (8).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center ">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

  </div>
           {/* 3rd */}
          
  <div className="h-[488px] w-[1048px]  flex justify-center items-center mx-56  mt-20 ">
    
    <div className="h-[488px] w-[238px]    ">
      <Image src={"/image/fixed-height (9).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image  className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

    <div className="h-[488px] w-[238px] ">
      <Image src={"/image/fixed-height (10).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24" src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10" src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

    <div className="h-[488px] w-[238px] ">
      
      <Image src={"/image/fixed-height (11).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

    <div className="h-[488px] w-[238px] ">
      <Image src={"/image/fixed-height (1).png"} alt="fix" height={300} width={239} />
      <h1 className="font-bold text-[16px] text-center ">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image  className="ml-24" src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10" src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
    </div>

  </div>



</div>

           
    

        
 
 

        
    
        
        
    </div>
  );
};

export default Shop;
