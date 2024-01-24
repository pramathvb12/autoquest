import React, { useEffect, useState } from "react";

const CarFilter = ({ carLists,setbrand,setorder }: any) => {
  const [brandlist, setbrandlist] = useState<any>();

  const setBrand = new Set();
  useEffect(() => {
    if (carLists) {
      filterCar();
    }
  }, [carLists]);
  const filterCar = () => {
    carLists.forEach((element: any) => {
      setBrand.add(element.carBrand);
    });
    // console.log(setBrand);
    setbrandlist(Array.from(setBrand));
  };
  return (
    <div className="mt-8 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Available</h2>
        <p>Explore more cars you like</p>
      </div>
      <div className="flex gap-8 ">
        <select className="select select-bordered w-full max-w-xs" onChange={(e)=>{
          setorder(e.target.value)
        }}>
          <option disabled selected>
            Price
          </option>
          <option value={'asc'}>Minimum to maximum</option>
          <option value={'desc'}>Maximum to minmum</option>
        </select>
        <select className="select select-bordered w-full max-w-xs" onChange={(e)=>{
          setbrand(e.target.value)
        }}>
          <option disabled selected>
            Manufacturer
          </option>
          {brandlist &&
            brandlist.map((brand: string, index: number) => (
              <option key={index}>{brand}</option>
            ))}
        </select>
      </div>
    </div>
  );
};
export default CarFilter;
