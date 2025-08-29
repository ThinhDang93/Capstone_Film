import React from "react";
import Navbar from "../template/Navbar";
import Footer from "../template/Footer";
import BookingInfo from "./ComponentBooking/BookingInfo";

const Booking = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto container p-12">
        <BookingInfo />
      </div>
      <Footer />
    </>
  );
};

export default Booking;
