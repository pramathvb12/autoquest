"use client";
import CarFilter from "@/components/Home/CarFilter";
import CarList from "@/components/Home/CarList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import Toast from "@/components/Toast";
import { getCarList } from "@/services";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [carOrgLists, setCarOrgList] = useState<any>([]);
  const [carLists, setCarList] = useState<any>([]);
  useEffect(() => {
    getresult();
  }, []);
  const getresult = async () => {
    const res: any = await getCarList();
    // console.log(res)
    setCarList(res?.carLists);
    setCarOrgList(res.carLists);
    // console.log(carOrgLists)
  };
  const filterList = (brand: string) => {
    const filterbrand = carOrgLists.filter(
      (item: any) => item.carBrand === brand
    );
    setCarList(filterbrand);
  };
  const orderList = (order: string) => {
    const sorteddata = [...carOrgLists].sort((a, b) =>
      order === 'asc' ? a.price - b.price : b.price - a.price
    );
    setCarList(sorteddata);
  };
  
  return (
    <div className="p-5 sm:px-10 md:px-20">
      {/* <Toast /> */}
      <Hero />
      <SearchInput />
      <CarFilter
        carLists={carOrgLists}
        setbrand={(value: string) => filterList(value)}
        setorder={(value: string) => orderList(value)}
      />
      <CarList carLists={carLists} />
    </div>
  );
}
