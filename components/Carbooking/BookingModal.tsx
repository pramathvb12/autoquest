import React, { useState } from 'react'
import CarCard from '../Home/CarCard'
import Form from './Form'
import { toast } from 'react-toastify'
import Toast from '../Toast'

const BookingModal = ({car}:any) => {
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const HandleClick = () => {
    // Show the message
    setIsMessageVisible(true);

    // Hide the message after a certain time (e.g., 2000 milliseconds)
    setTimeout(() => {
      setIsMessageVisible(false);
    }, 6000);
  };
  const handleModalClick = ({e}:any) => {
    // Prevent the click event from propagating up the DOM tree
    e.stopPropagation();
  };

  return (
         <div className="modal-box w-11/12 max-w-5xl">
          <h1 className="font-bold  text-[20px]">Rent car now!</h1>
          <div className="border-b-2 my-4"></div>
          {/* <p className="py-4">Click the button below to close</p> */}
          <div className='grid grid-cols-1 md:grid-cols-2'>
              
              <div className='mt-3'>
              <h3 className='mb-3 text-[17px]'>Car Info</h3>
              <CarCard car={car}/>
              </div>

            <div className='ml-10'>
              <Form />
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
            <button
        className="p-2 mt-5 mr-3 bg-blue-500 hover:bg-blue-700 px-5 rounded"
        onClick={HandleClick}
      >
        Rent
      </button>

      {isMessageVisible && (
        <div className="bg-green-500 p-2 mt-2 rounded">
          Booked Sucessfully! {/* Customize this message as needed */}
        </div>
      )}
              {/* if there is a button, it will close the modal */}

              <button className="btn border border-red-600">Close</button>
              
            </form>
          </div>
        </div>
  )
}

export default BookingModal
