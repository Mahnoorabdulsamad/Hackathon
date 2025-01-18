import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="h-[92px] py-[24px] bg-[#FAFAFA]   ">
        <div className="ml-8 flex items-center gap-5">
          <h1 className="font-bold text-[14px] text-[#252B42]">Home</h1>
          <Image
            src="/image/icn arrow-right icn-xs (1).png"
            alt="arrow-right"
            height={16}
            width={9}
          />
          <h1 className="font-bold text-[14px]">Shop</h1>
        </div>
      </div>

      <div className="h-[598px] w-[1440px] bg-[#FAFAFA] ">
        <div className="h-[550px] w-[1050px]  pb-[48px] mx-52 flex">
          <Image
            src={"/image/col-md-6.png"}
            alt="col"
            width={510}
            height={550}
          />

          <div className="h-[471px] w-[510px]  p-4">
            <h1 className="text-[20px] h-[30px] font-semibold mb-6">
              Floating Phone
            </h1>

            <Image
              className="mb-8"
              src={"/image/Frame 31 (1).png"}
              alt="cf"
              width={222}
              height={24}
            />

            <h1 className="font-bold text-[24px] h-[32px]  mb-6">
              $1,139.33
            </h1>

            <div className="flex mb-6">
              <h1 className="font-bold text-[14px] text-[#737373]">
                Availability :
              </h1>
              <h1 className="text-[#23A6F0] ml-2">In Stock</h1>
            </div>

            <p className="text-[14px] mb-10">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>

            <Image
              src={"/image/product-colors.png"}
              alt="colors"
              height={30}
              width={150}
              className="mb-12"
            />

            <Image
              src={"/image/product-actions.png"}
              alt="actions"
              height={44}
              width={298}
            />
          </div>
        </div>
      </div>

       <div className="h-[572px]  bg-[#FFFFFF]  ">
        <div className="h-[91px] w-[1440px] ">
        <div className="h-[72px] w-[1050px] font-bold text-[14px] flex justify-center items-center  gap-10 ml-52 ">
          <h1>Description</h1>
          <h1>Additional Information</h1>
          <h1>Reviews (0)</h1>
        </div></div>
      
         <div className="h-[499px] w-[1056px] pt-[24px] pb-[48px]  flex ml-52  ">
          <div className="h-[392px] w-[332px]   ">
            <Image
              src={"/image/card-item (1).png"}
              alt="actions"
              height={44}
              width={298}
            />
          </div>

          <div className="h-[427px] w-[332px]   flex flex-col ">
            <p className="font-bold text-[22px] h-[32px] w-[304px] mb-8">
              the quick fox jumps over
            </p>
            <p className="font-bold text-[14px] h-[340px] w-[332px] mb-9">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>

            <p className="font-bold text-[14px] h-[340px] w-[332px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. venial
              consequent sent nostrum met.
            </p>

            <p className="font-bold text-[14px] h-[340px] w-[332px]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent . RELIT official consequent door ENIM RELIT Mollie.
              Excitation venial consequent sent nostrum met.
            </p>
          </div>

          <div className="h-[367px] w-[332px]   ">
            <p className="font-bold text-[22px] h-[32px] w-[304px]">
              the quick fox jumps over{" "}
            </p>
            <Image
              src={"/image/list.png"}
              alt="actions"
              height={92}
              width={303}
            />
            <p className="font-bold text-[22px] h-[32px] w-[304px]">
              the quick fox jumps over{" "}
            </p>
            <Image
              src={"/image/list.png"}
              alt="actions"
              height={92}
              width={303}
            />
          </div>
        </div>
      </div> 

         {/* 8pic */}
         <div className="h-[1086px]  bg-[#FAFAFA]">
          <div className="h-[1086px] w-[1124px] py-[48px] mx-52">
           <div className="h-[32px] w-[1040px] "> 
            <p className="font-bold text-[24px] text-[#252B42]">BESTSELLER PRODUCTS</p>
           </div>
           {/* 1strow */}
           <div className="h-[442px] w-[1049px] gap-[30px]  ml-8 flex flex-row">
            <div className="h-[442px] w-[238px] ">
              <Image src={"/image/product-cover-5 (4).png"} alt="cup" height={280} width={239}/>
            <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
       </div>

       <div className="h-[442px] w-[238px] ">
              <Image src={"/image/fixed-height (12).png"} alt="cup" height={280} width={239}/>
            <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
       </div>

       <div className="h-[442px] w-[238px] ">
              <Image src={"/image/product-cover-5 (1).png"} alt="cup" height={280} width={239}/>
            <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
       </div>


       <div className="h-[442px] w-[238px] ">
              <Image src={"/image/fixed-height (13).png"} alt="cup" height={280} width={239}/>
            <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
       </div> 
        </div>
    {/* 2row */}

    <div className="h-[442px] w-[1049px] gap-[30px]  ml-8 flex flex-row">
            <div className="h-[442px] w-[238px] ">
              <Image src={"/image/product-cover-5 (2).png"} alt="cup" height={280} width={239}/>
            <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
       </div>

       <div className="h-[442px] w-[238px] ">
              <Image src={"/image/fixed-height (14).png"} alt="cup" height={280} width={239}/>
            <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
       </div>

       <div className="h-[442px] w-[238px] ">
              <Image src={"/image/product-cover-5 (4).png"} alt="cup" height={280} width={239}/>
            <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
       </div>


       <div className="h-[442px] w-[238px] ">
              <Image src={"/image/fixed-height (12).png"} alt="cup" height={280} width={239}/>
            <h1 className="font-bold text-[16px] text-center">Graphic Design</h1>
      <h1 className="font-bold text-[14px] text-center">English Department</h1>
      <Image className="ml-24"src={"/image/prices.png"} alt="fix" height={24} width={52} />
      <Image className="ml-10"src={"/image/product-colors.png"} alt="fix" height={30} width={150} />
       </div> 
        </div>
          </div>

         </div>
 

          <div className="h-[175px]">
             <Image
        src={"/image/desktop-clients-1.png"}
        alt="ser"
        height={175}
        width={1600}
      />
          </div>







    </div>
  );
};

export default Hero;
