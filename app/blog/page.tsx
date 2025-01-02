import { client } from "@/sanity/lib/client";
import React from "react";
import Link from "next/link";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
type TYpeOfData =  {
_id:string;
title : string;
img : string ;
date:string;
para:string

}



const page = async () => {
  const query = `*[_type == "blog"]{
  _id,
  title,
  img,
  date,
  para
  }`;
  const data = await client.fetch(query);

  return (
    <div className="bg-white  ">
      <div className="flex justify-center items-center">
        <div className="grid w-[800px] grid-cols">
          <div className="flex justify-center items-center text-center md:mt-48 mt-5">
            <h1 className="font-bold  md:text-5xl text-3xl font-[Inter]">The Feed</h1>
          </div>
          <div className=" md:flex hidden mb-9 justify-between items-center mt-10">
            <h2 className="font-light font-[Inter] text-lg text-slate-700">
              All Posts
            </h2>
            <button className="border border-[#BB5A3A] text-[#BB5A3A] h-[40px] w-[170px]">
              Log in/Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="h-full mt-9 flex justify-center items-center ">
        <div className="grid w-[920px]   gap-6 md:grid-cols-3 grid-cols-1">
          {data.map((item:TYpeOfData , index: number) => (
            <div
              key={index}
              className="flex flex-col  border-slate-200 border-b-2 md:border sm:border-t-0 sm:border-b-2 sm:border-slate-300 h-[730px]"
            >
              <div>
                <Link href={`/blog/${item._id}`}>
                  <img
                    src={item.img}
                    alt={`Image for ${item.title}`}
                    className="mx-auto"
                  />
                </Link>
              </div>
              <div className="flex flex-col text-start py-8 px-8 gap-y-5">
                <p>{item.date}</p>
                <p className="font-bold font-[Inter] text-2xl">{item.title}</p>
                <p className="text-base font-light font-[Inter]">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default page;
