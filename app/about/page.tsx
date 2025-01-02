import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center text-center pt-8 md:pt-[210px]">
        {/* Content Section */}
        <div className="md:w-[936px] w-auto h-auto bg-[#f4e3de] text-black py-12 px-8 md:py-24 md:px-20">
          <div className="w-full md:w-[416px] text-start flex flex-col gap-y-8 order-1 md:order-2">
            <h1 className="font-bold font-[Inter] text-4xl md:text-5xl">
              Meet the face behind the posts
            </h1>
            <p className="font-light text-base font-[Inter]">
              I`&apos;`m a paragraph. Click here to add your own text and edit me. It`&apos;`s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I`&apos;`m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <p className="font-light text-base font-[Inter]">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
        {/* Image Section */}
        <div className="md:bottom-5 order-2 md:order-1 mt-12  md:absolute md:ml-[500px]">
          <Image
            alt=""
            height={500}
            width={500}
            src="https://static.wixstatic.com/media/75059a_837c609e5bfe43c69662dcb5fd611e96~mv2.jpg/v1/crop/x_1023,y_136,w_4032,h_3011/fill/w_551,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-962633986.jpg"
          />
        </div>
        </div>

      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default page;
