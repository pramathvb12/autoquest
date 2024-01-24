import React, { useState } from "react";
import CarCard from "./CarCard";
import BookingModal from "../Carbooking/BookingModal";

const CarList = (props: any) => {
  const [selectedCar,setSelectedCar] = useState<any>([]);
  // console.log(props.carLists)
  if (!props.carLists) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-center">
      {props.carLists.map((car: any, index: number) => (
        <div className="m-4" onClick={()=>{{(window as any).my_modal_4.showModal()};
        setSelectedCar(car)
        }}>
          {/* {car.name} */}
          <CarCard car={car} />
        </div>
      ))}
      <dialog id="my_modal_4" className="modal">
        <BookingModal car={selectedCar}/>
      </dialog>
    </div>
  );
};

export default CarList;
