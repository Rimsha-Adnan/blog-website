import React from "react";
import Image from "next/image";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

import Link from "next/link";
const Post = () => {
  return (
    <div>
      <div className="flex  flex-col md:flex-row justify-center  md:h-auto gap-8 md:gap-40 ml-4 mr-4 mt-28">
        <div className="flex flex-col gap-y-8 w-full md:w-[598px]">
          {/* Blog Post 1 */}
          <div className="h-auto md:h-[359px]  border border-slate-200 ">
            <div className="flex flex-wrap gap-4 md:gap-10">
              <div className="w-full md:w-auto">
                <Image
                  alt=""
                  width={268}
                  height={376}
                  src="https://static.wixstatic.com/media/75059a_cf2c39f511b6478eaea5b4f7713831c0~mv2.jpg/v1/fill/w_268,h_358,fp_0.50_0.50,q_90,enc_auto/75059a_cf2c39f511b6478eaea5b4f7713831c0~mv2.jpg"
                  className="w-full md:w-[268px] md:h-[359px] h-auto"
                />
              </div>
              <div className="flex-1 text-black hover:text-[#BB5A3A] space-y-3 py-6 px-4">
                <p className="font-normal text-xs text-black md:text-sm">
                  Mar 21, 2023 . 2 min read
                </p>
                <h1 className="font-semibold text-3xl md:text-2xl">
                  Transform your<br/> winter blues into<br/> winter creativity
                </h1>
                <h5 className="font-normal text-base font-[Inter]">
                  Create a blog post subtitle that summarizes your post in a few
                  short, punchy sentences and...
                </h5>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="h-auto md:h-[356px] border border-slate-200 ">
            <div className="flex flex-wrap gap-4 md:gap-10">
              <div className="w-full md:w-auto">
                <Image
                  alt=""
                  width={265}
                  height={200}
                  src="https://static.wixstatic.com/media/75059a_19d50c96541b4b1aa915d498b351bd17~mv2.jpg/v1/fill/w_268,h_358,fp_0.50_0.50,q_90,enc_auto/75059a_19d50c96541b4b1aa915d498b351bd17~mv2.jpg"
                  className="w-full md:w-[268px] md:h-[354px] h-auto"
                />
              </div>
              <div className="flex-1 text-black hover:text-[#BB5A3A] space-y-3 py-6 px-4">
                <p className="font-normal text-xs text-black md:text-sm">
                  Apr 10, 2023 . 3 min read
                </p>
                <h1 className="font-semibold text-3xl md:text-2xl">
                5 reasons to wake up at 5am
                </h1>
                <h5 className="font-normal text-base">
                  Discover ways to find creativity in the mundane and make each
                  day inspiring...
                </h5>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="h-auto md:h-[356px] border border-slate-200">
            <div className="flex flex-wrap gap-4 md:gap-10">
              <div className="w-full md:w-auto">
                <Image
                  alt=""
                  width={268}
                  height={170}
                  src="https://static.wixstatic.com/media/a27d24_77c3bdd084c14f50a13aa9b44485c2e3~mv2.jpg/v1/fill/w_268,h_358,fp_0.50_0.50,q_90,enc_auto/a27d24_77c3bdd084c14f50a13aa9b44485c2e3~mv2.jpg"
                  className="w-full md:w-[268px] md:h-[354px] h-auto"
                />
              </div>
              <div className="flex-1 text-black hover:text-[#BB5A3A] space-y-3 py-6 px-4">
                <p className="font-normal text-xs text-black md:text-sm">
                  May 15, 2023 . 4 min read
                </p>
                <h1 className="font-semibold text-3xl md:text-2xl">
                How decluttering changes my life 
                </h1>
                <h5 className="font-normal text-base">
                  Start your day on the right note with these tips for building
                  an energizing morning routine...
                </h5>
              </div>
            </div>
          </div>

          <div className="bg-[#BB5A3A] flex md:flex-col sm:justify-center text-white hover:bg-black h-12 w-32 p-3 mt-5 text-center">
            <button >
              <Link href="/blog">All Posts</Link>
            </button>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="w-full md:w-[592px]  md:h-[1456px] h-full bg-[#f4e3de] flex flex-col items-center text-center py-20">
          <div className="w-full max-w-md bg-[#BB5A3A] flex  flex-col items-center gap-8 md:py-20 md:px-20 py-10 px-7">
            <h1 className="font-extrabold text-2xl md:text-4xl text-white">
              Let the posts come to you.
            </h1>
            <div className="w-full text-start pt-7 ">
              <label className=" text-white font-normal font-[Inter] text-lg ">Email *</label>
              <input
                type="text"
                className="border-b border-white bg-transparent focus:outline-none mt-5 w-full h-10"
              />
            </div>
            <div className="flex items-center text-start md:gap-3 gap-4 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="">
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="m9 11l3 3l8-8" />
                  <path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
                </g>
              </svg>
              <p className="text-white font-normal font-[Inter] text-base">
                Yes, subscribe me to your newsletter.
              </p>
            </div>
            <button className="bg-white text-[#BB5A3A] hover:bg-black hover:text-white w-full h-12 text-center text-xl font-medium font-[Inter]">
              Subscribe
            </button>
          </div>

          {/* Instagram Section */}
          <div className="mt-20 w-full max-w-md">
            <h1 className="text-black font-semibold text-3xl text-center">
              Find me on Instagram
            </h1>
            <div className="grid md:ml-10 ml-4 mt-6 grid-rows-1 md:grid-cols-2 gap-4 ">
            <div className="flex flex-col gap-4 w-full">
              <Image
                alt=""
                height={190}
                width={190}
                src="https://wixmp-19e700b7666f74a00729a0dd.wixmp.com/Instagram/Life_Blog_Turning_Heads/01.jpg"
                className="w-auto h-auto md:w-48 md:h-48"
              />
              <Image
                alt=""
                height={190}
                width={190}
                src="https://wixmp-19e700b7666f74a00729a0dd.wixmp.com/Instagram/Life_Blog_Turning_Heads/03.jpg"
                className="w-auto h-auto md:w-48 md:h-48"
              />
              <Image
                alt=""
                height={190}
                width={190}
                src="https://wixmp-19e700b7666f74a00729a0dd.wixmp.com/Instagram/Life_Blog_Turning_Heads/05.jpg"
                className="w-auto h-auto md:w-48 md:h-48"
              />
            </div>
            <div className="flex flex-col gap-4 w-full">
              <Image
                alt=""
                height={190}
                width={190}
                src="https://wixmp-19e700b7666f74a00729a0dd.wixmp.com/Instagram/Life_Blog_Turning_Heads/02.jpg"
                className="w-auto h-auto md:w-48 md:h-48"
              />
              <Image
                alt=""
                height={190}
                width={190}
                src="https://wixmp-19e700b7666f74a00729a0dd.wixmp.com/Instagram/Life_Blog_Turning_Heads/04.jpg"
                className="w-auto h-auto md:w-48 md:h-48"
              />
              <Image
                alt=""
                height={190}
                width={190}
                src="https://wixmp-19e700b7666f74a00729a0dd.wixmp.com/Instagram/Life_Blog_Turning_Heads/06.jpg"
                className="w-auto h-auto md:w-48 md:h-48"
              />
            </div>
            </div>
          

            <ul className="flex justify-center gap-5 mt-8">
              <li>
                <Link href="https://www.facebook.com/">
                  <TiSocialFacebook className="fill-black h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/">
                  <SlSocialInstagram className="fill-black h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <TiSocialTwitter className="fill-black h-8 w-8" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/feed/">
                  <TiSocialLinkedin className="fill-black h-8 w-8" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
