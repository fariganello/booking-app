import React from 'react';
import { Link } from 'react-router-dom';
import Header from "components/Header";

const CreateBookings = () => (
    <>
        <Header title="Acept Bookings"/>
        <div>CONFIRM BOOKINGS</div>
        <Link to="/">Go Back</Link>
    </>
)

export default CreateBookings;
