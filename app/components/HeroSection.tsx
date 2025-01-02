import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative">
    <div className="flex  gap-2 justify-center lg:justify-between pt-[10px] md:pt-[120px]">
      {/* Image 1 */}
      <div className="w-full lg:w-auto hidden md:block">
        <Image
          width={660}
          height={700}
          alt=""
          className="w-full lg:w-[660px] md:w-[660px] h-auto"
          src="https://static.wixstatic.com/media/84770f_579889e3c7ab4551ac493b6e60ebc25a~mv2.jpg/v1/fill/w_632,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_579889e3c7ab4551ac493b6e60ebc25a~mv2.jpg"
        />
      </div>
  
      {/* Image 2 */}
      <div className="w-full lg:w-auto ">
        <Image
          width={650}
          height={700}
          alt=""
          className="w-full lg:w-[650px] md:w-[650px] h-auto"
          src="https://static.wixstatic.com/media/75059a_a28bb23346c740cfa809bb26a81ce414~mv2.jpg/v1/fill/w_624,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/75059a_a28bb23346c740cfa809bb26a81ce414~mv2.jpg"
        />
      </div>
  
      {/* Image 3 */}
      <div className="w-full lg:w-auto hidden md:block">
        <Image
          width={650}
          height={700}
          alt=""
          className="w-full lg:w-[650px] md:w-[650px] h-auto"
          src="https://static.wixstatic.com/media/84770f_c8617aa06c6e43f5a95ebf63003a2347~mv2.jpg/v1/fill/w_624,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_c8617aa06c6e43f5a95ebf63003a2347~mv2.jpg"
        />
      </div>
    </div>
  
    {/* Text Box */}
    <div className="absolute left-1/2  transform -translate-x-1/2 -translate-y-1/2  xl:top-[760px]  lg:top-[570px]  md:top-[480px] w-[90%] max-w-[451px] bg-white h-[75px] flex justify-center items-center text-black z-10">
      <h1 className="font-semibold font-[Inter] text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center">
        My Life. My Blogs.
      </h1>
    </div>
  </div>
  
  

   

  );
};

export default HeroSection;
