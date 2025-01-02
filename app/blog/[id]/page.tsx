
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { client } from "../../../sanity/lib/client";


type GivingType = {
  params: {
    id: string;
  };
};
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoIosLink } from "react-icons/io";
import { SlSocialInstagram } from "react-icons/sl";

import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

const ResponsiveBlogPage = async ({ params }: GivingType) => {
  const { id } = params;
  const query = `*[_type == "blog" && _id == $id][0]{
  _id,
  title,
  img,
  date,
  para,
  
  }`;

  const data = await client.fetch(query, { id });
  // return (
  return (
    <div>
      <div className="flex  p-4 md:p-0  flex-col md:flex-row justify-center gap-20">
        <div>
          <div className="md:mt-40  text-start  md:py-16">
            <h1 className="font-light font-[Inter] text-lg text-slate-700">
              All Posts
            </h1>
          </div>
          {/* Main Content */}
          <div className="flex flex-col md:flex-row md:w-[627px] w-auto">
            <div className="md:flex-col flex flex-col md:w-[627px] w-auto">
              <div className="items-center">
                <div className="md:w-[627px] w-full">
                  <div className="flex flex-col space-y-10 mt-5">
                    <p className="text-slate-700">{data.date}</p>
                    <h1 className="font-extrabold font-[Inter] text-2xl  md:text-start  md:text-5xl">
                      {data.title}
                    </h1>
                    <p className="text-slate-700 text-lg">
                      Create a blog post subtitle that summarizes your post in a
                      few short, <br /> punchy sentences and entices your
                      audience to continue reading.
                    </p>
                    <Image
                      src={data.img}
                      alt=""
                      width={627}
                      height={600}
                      className="w-full"
                    />
                    <p className="text-slate-700 text-lg font-light font-[Inter] md:w-[610px]">
                      Welcome to your blog post. Use this space to connect with
                      your readers and potential customers in a way that’s
                      current and interesting. Think of it as an ongoing
                      conversation where you can share updates about business,
                      trends, news, and more.
                    </p>
                  </div>
                  {/* Subsections */}
                  <div className="flex flex-col space-y-10 py-9">
                    <div>
                      <h1 className="font-semibold font-[Inter] text-2xl text-black">
                        Design with Ease
                      </h1>
                    </div>
                    <div className="flex flex-col space-y-8">
                      <h3 className="font-light border-l-4 text-slate-700 pl-4 border-[#BB5A3A] font-[Inter] text-2xl">
                        “Do you have a design in mind for your blog? Whether you
                        prefer a trendy postcard look or you’re going for a more
                        editorial style blog - there’s a stunning layout for
                        everyone.”
                      </h3>
                      <p className="text-slate-700 md:w-[610px] text-lg font-light font-[Inter]">
                        Every layout comes with the latest social features built
                        in. Readers will be able to easily share posts on social
                        networks like Facebook and Twitter, view how many people
                        have liked a post, made comments and more.
                      </p>
                    </div>
                    {/* Other subsections */}
                    <div className="flex flex-col space-y-8">
                      <h1 className="font-semibold font-[Inter] text-2xl  text-black">
                        Create Relevant Content
                      </h1>
                      <p className="text-slate-700 text-lg font-light font-[Inter] w-auto md:w-[610px]">
                        You’ll be posting loads of engaging content, so be sure
                        to keep your blog organized with Categories that also
                        allow readers to explore more of what interests them.
                        Each category of your blog has its own page that’s fully
                        customizable. Add a catchy title, a brief description
                        and a beautiful image to the category page header to
                        truly make it your own. You can also add tags (#vacation
                        #dream #summer) throughout your posts to reach more
                        people, and help readers search for relevant content.
                        Using hashtags can expand your post reach and help
                        people find the content that matters to them. Go ahead,
                        #hashtag away.
                      </p>
                    </div>
                    <div>
                      <h1 className="font-semibold font-[Inter] text-2xl  text-black">
                        Stun Your Readers
                      </h1>
                    </div>
                    <div className="flex flex-col space-y-8">
                      <h3 className="border-l-4 h-12 border-[#BB5A3A] text-2xl font-normal font-[Inter] pl-4">
                        “Be original, show off your style, and tell your story.”
                      </h3>
                      <p className="text-slate-700 text-lg font-light font-[Inter] w-auto md:w-[610px]">
                        Blogging gives your site a voice, so let your business’
                        personality shine through. Are you a creative agency? Go
                        wild with original blog posts about recent projects,
                        cool inspirational ideas, or what your company culture
                        is like. Add images, and videos to really spice it up,
                        and pepper it with slang to keep readers interested. Are
                        you a programmer? Stay on the more technical side by
                        offering weekly tips, tricks, and hacks that show off
                        your knowledge of the industry. No matter what type of
                        business you have, one thing is for sure - blogging
                        gives your business the opportunity to be heard in a way
                        in a different and unconventional way.
                      </p>
                    </div>
                    <div className="flex flex-col space-y-8">
                      <h1 className="font-semibold font-[Inter] text-2xl  text-black">
                        Get Inspired
                      </h1>
                      <p className="text-slate-700 text-lg font-light font-[Inter] md:w-[610px] w-auto">
                        To keep up with all things Wix, including website
                        building tips and interesting articles, head over to the
                        Wix Blog. You may even find yourself inspired to start
                        crafting your own blog, adding unique content, and
                        stunning images and videos. Start creating your own blog
                        now. Good luck!
                      </p>
                    </div>
                    {/* ... Include the other sections here following the same responsive principles */}
                  </div>
                  {/* Social Links */}
                  <div className="border-t-2 border-slate-200">
                    <ul className="flex gap-8 py-5">
                      <li>
                        <Link href="https://www.facebook.com/">
                          <TiSocialFacebook className="fill-black md:h-[24px] h-[20px] md:w-[24px] w-[20px]" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <FaXTwitter className="fill-black md:h-[24px] h-[20px] md:w-[24px] w-[20px]" />
                        </Link>
                      </li>
                      <li>
                        <Link href="https://www.linkedin.com/feed/">
                          <TiSocialLinkedin className="fill-black md:h-[24px] h-[20px] md:w-[24px] w-[20px]" />
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <IoIosLink className="fill-black md:h-[24px] h-[20px] md:w-[24px] w-[20px]" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Recent Posts */}
              <div className="flex flex-col gap-8 relative right-0 md:right-16 w-auto md:w-[727px]">
                <div className="flex justify-between mt-16">
                  <h1 className="font-light font-[Inter] text-xl">
                    Recent Posts
                  </h1>
                  <button className="font-light font-[Inter] text-base outline-none">
                    <Link href="/blog">See All</Link>
                  </button>
                </div>
                <div className="flex flex-col gap-8">
                  <Image
                    src="https://static.wixstatic.com/media/75059a_19d50c96541b4b1aa915d498b351bd17~mv2.jpg"
                    alt=""
                    width={300}
                    height={100}
                    // className=""
                  />
                  <h2 className="font-bold font-[Inter] text-xl">
                    5 reasons to wake up at 5am
                  </h2>
                </div>
              </div>
              {/* Comments Section */}
              <div className="md:py-20 flex flex-col gap-8 relative right-0 md:right-7 w-auto md:w-[727px]">
                <label className="text-xl font-semibold font-[Inter] border-b-2 border-slate-200 py-5">
                  Comments
                </label>
                <textarea
                  typeof="text"
                  placeholder="Write a comment..."
                  className="text-base text-slate-700 mt-5 md:focus:outline-none md:h-[100px] border md:w-full"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
       
        <div className="md:h-[1160px] h-auto md:w-[340px] w-auto bg-[#f4e3de] flex flex-col justify-center items-center  md:mt-80 gap-y-10 ">
          <div className=" space-y-6 px-3">
            <Image
              src="https://static.wixstatic.com/media/75059a_837c609e5bfe43c69662dcb5fd611e96~mv2.jpg/v1/crop/x_1841,y_142,w_2317,h_2253/fill/w_320,h_309,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-962633986.jpg"
              alt=""
              height={210}
              width={210}
              className=""
            />
            <h1 className="font-semibold text-2xl font-[Inter] pt-5">
              Hi, thanks for <br />
              stopping by!
            </h1>
            <p className="font-semibold font-[Inter] text-base">
              I`&apos;`m a paragraph. Click here to add your own text and edit me. I`&apos;`m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <button className="md:h-[40px] md:w-[142px] w-auto h-[20px] border border-black text-black hover:text-white hover:border-[#BB5A3A] hover:bg-[#BB5A3A]">
              Read More
            </button>
          </div>

          <div className="md:w-[320px] md:h-[458px] h-auto w-auto bg-[#BB5A3A] flex flex-col justify-center items-center gap-6  ">
            <div>
              <h1 className="font-extrabold text-4xl text-white font-[Inter]">
                Let the posts
                <br />
                come to you.
              </h1>
            </div>
            <div className="flex flex-col items-start">
              <label className="font-normal font-[Inter] text-white py-3 ">
                Email *
              </label>
              <br />
              <input
                type="text"
                placeholder=""
                required
                className="border-b md:h-[20px] h-[10px] border-white bg-transparent focus:outline-none md:w-[256px] w-auto"
              />
            </div>
            <div className="flex text-start gap-2 w-[256px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="m9 11l3 3l8-8" />
                  <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
                </g>
              </svg>
              <p className="text-white ">
                Yes,subscribe me to your
                <br />
                newsletter.
              </p>
            </div>
            <div>
              <button className="bg-white md:h-[50px] h-auto text-[#BB5A3A] w-full md:w-[256px] text-center font-medium font-[Inter] text-xl">
                Subscribe
              </button>
            </div>
          </div>
          <div className="">
            <ul className="flex gap-6  justify-center items-center text-center ">
              <li>
                <Link href="https://www.facebook.com/">
                  <TiSocialFacebook className="fill-black md:h-[24px] h-auto w-auto md:w-[24px]" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">
                  <SlSocialInstagram className=" fill-black md:h-[20px] h-auto w-auto md:w-[20px]" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <TiSocialTwitter className="fill-black md:h-[24px] h-auto w-auto md:w-[24px]" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/feed/">
                  <TiSocialLinkedin className="fill-black md:h-[24px] h-auto w-auto md:w-[24px]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default ResponsiveBlogPage;
