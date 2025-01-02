import React from 'react'

const Contact = () => {
  return (
    <div className="bg-[#f4e3de]  mt-20 h-[700px]  text-black" id='contact'>
    <div>
      <div className="text-center py-16 md:py-28 text-black">
        <h1 className="font-semibold font-[Inter] text-3xl md:text-5xl px-4">
          Let me know what is  on your mind
        </h1>
      </div>
      <div className="flex justify-center px-8">
        <div className="w-full max-w-[700px] items-center flex flex-col justify-center gap-6">
          <div className="flex flex-col md:flex-row gap-5 w-full">
            <div className="w-full md:w-1/2">
              <label className="font-normal font-[Inter]">First name *</label>
              <br />
              <input
                type="text"
                required
                className="border-b h-[40px] border-black bg-transparent focus:outline-none w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <label className="font-normal font-[Inter]">Last name *</label>
              <br />
              <input
                type="text"
                required
                className="border-b h-[40px] border-black bg-transparent focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="font-normal font-[Inter]">Email *</label>
            <br />
            <input
              type="email"
              required
              className="border-b h-[50px] border-black bg-transparent focus:outline-none w-full"
            />
          </div>
          <div className="w-full">
            <label className="font-normal font-[Inter]">Leave us a message...</label>
            <br />
            <textarea
              required
              className="border-b h-[100px] border-black bg-transparent focus:outline-none w-full"
            ></textarea>
          </div>
          <button className="bg-[#BB5A3A] h-[50px] text-white w-full md:w-[190px] text-center font-medium font-[Inter] text-xl">
            Submit
          </button>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default Contact