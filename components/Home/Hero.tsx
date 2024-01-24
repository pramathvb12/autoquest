import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white-800 mb-4">AutoQuest</h1>
        <p className="text-lg md:text-xl text-white-600">Discover our exclusive selection of high-end vehicles, tailored to elevate your travel experience. Luxury, comfort, and style await you..</p>
        <button className="p-2 mt-5 bg-blue-500 hover:bg-blue-700 px-5 rounded-full">Explore More</button>


      </div>

      <div className="flex justify-center items-center">
      <Image src ='/carpic.jpg'
      alt='car'
        width={400}
        height={500}
        className="w-full max-w-lg rounded-lg shadow-lg"
       />
         
      </div>
    </div>
  );
};

export default Hero;
