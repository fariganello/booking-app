import React from "react";
import { Link } from "react-router-dom";
import Header from "components/Header";

const CreateBookings = () => (
  <>
    <Header title="Make a Booking"/>
    <div>CREATE BOOKINGS</div>
    <Link to="/confirm">Confirm bookings</Link>
  </>
);

export default CreateBookings;
