import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaGasPump } from "react-icons/fa";
import { PiSteeringWheelBold } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
const CarCard = (props: any) => {
  const [car, setCar] = useState<any>();
  //   console.log(car.image.url)
  //   if (!car.image.url) {
  //     return <div>Loading...</div>;
  //   }

  useEffect(() => {
    if (props.car) {
      setCar(props.car);
    }
  }, [props.car]);
  // console.log(car)
  return (
    car && (
      <div className="group bg-black p-4 hover:border-white border-2 border-white border-opacity-100 rounded-md overflow-hidden cursor-pointer duration-75 space-y-2">
        <h5 className="text-[19px] font-bold mb-2"> {car.name}</h5>
        <h5 className="text-[15px] font-bold mb-2">
          {" "}
          <span className="text-[10px] font-light"> ₹</span>
          {car.price} <span className="text-[14px] font-light"> /day</span>{" "}
        </h5>
        {car.image && car.image.length > 0 && car.image[0].url && (
          <Image
            src={car.image[0].url}
            alt={car.name}
            width={220}
            height={200}
            decoding="async"
            className="w-[250px] h-[150px] mb-3 rounded ml-5"
          />
        )}
        <div className="flex justify-around">
          <div className="text-center text=grey-400">
            <PiSteeringWheelBold className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light ">
              {car.carType}
            </h2>
          </div>
          <div className="text-center text=grey-400">
            <FaCar className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light ">
              {car.carBrand}
            </h2>
          </div>
          <div className="text-center text-grey-400">
            <FaGasPump className="w-full text-[22px] mb-2" />
            <h2 className="line-clamp-5 text-[14px] font-light ">
              {car.carAvg} MPG
            </h2>
          </div>

          {/* <div className="text-center text-grey-400">
        <CiCalendarDate className="w-full text-[22px] mb-2" />
        <h2 className="line-clamp-5 text-[14px] font-light ">{car.year}</h2> 

      </div> */}
          {/* <button className="p-2 mt-5 bg-blue-500 hover:bg-blue-700 px-5 rounded">
            Rent Now
          </button> */}
        </div>
      </div>
    )
  );
};

export default CarCard;
