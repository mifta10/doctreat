import React, { useState } from 'react';
import BookingForm from '../BookingForm/BookingForm'


const BookingCard = ({booking, date}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    
      <div className="col-md-4 mb-5">
        <div className="card p-3">
          <div className="card-body text-center">
            <h5 className="card-title text-brand">{booking.subject}</h5>
            <h6>{booking.visitingHour}</h6>
            <p>{booking.totalSpace} spaces available</p>
            <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
            <BookingForm appointmentOn={booking.subject} date={date} modalIsOpen={modalIsOpen} closeModal={closeModal}></BookingForm>
          </div>
        </div>
      </div>

  );
};

export default BookingCard;