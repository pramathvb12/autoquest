import { getStoreLocation } from "@/services";
import { getLocation } from "graphql";
import React, { useEffect, useState } from "react";

const Form = () => {
  const [location, setLocation] = useState<any>([]);

  useEffect(() => {
    getStoreLocation_();
  }, []);
  const getStoreLocation_ = async () => {
    const res: any = await getStoreLocation();
    console.log(res)
    setLocation([res]);
    console.log(location)
  };
  return (
    <div className="flex flex-col">
      <h2>Location</h2>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1 border border-white">
          Select the Location
        </div>
        <select
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {location &&
            location.map((loc: any, index: number) => (
              <option key={index} value={loc?.address}>
                {loc?.address}
              </option>
            ))}
            <option value="1">Kumta</option>
            <option value="1">Karnataka</option>
            <option value="1">Bengaluru</option>
        </select>
      </div>
      <div className="flex flec-col gap-5 mt-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400 ">PickUp Date</label>
          <input
            type="date"
            className="input input-bordered w-full max-w-lg input-info"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400 ">DropOff Date</label>
          <input
            type="date"
            className="input input-bordered w-full max-w-lg input-info"
          />
        </div>
      </div>
      <div className="flex flec-col gap-5 mt-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400 ">PickUp Time</label>
          <input
            type="time"
            className="input input-bordered w-full max-w-lg input-info"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400 ">Dropdown Time</label>
          <input
            type="time"
            className="input input-bordered w-full max-w-lg input-info"
          />
        </div>
      </div>
      <div className="flex flec-col gap-5 mt-8">
        <label className="text-gray-400 ">Contact Number</label>
        <input
          type="text"
          placeholder="Enter contact number"
          className="input input-bordered w-full max-w-lg input-success"
        />
      </div>
    </div>
  );
};

export default Form;
