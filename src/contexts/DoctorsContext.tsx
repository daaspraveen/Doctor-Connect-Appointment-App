import React from "react";

export interface Booking {
    id: string;
    patientName: string;
    email: string;
    specialty: string;
    dateTime: string;
}

export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    availability_status: string;
    experience_years: number;
    bio: string;
    next_available_date: string;
    isBooked: boolean;
}

interface DoctorsContextType {
    doctorsData: Doctor[];
    userBookings: Booking[];
    addBooking: (bookingInfo: Booking) => void;
    removeBooking: (bookingId: string) => void;
}

const DoctorsContext = React.createContext<DoctorsContextType>({
    doctorsData: [],
    userBookings: [],
    addBooking: () => { },
    removeBooking: () => { },
});

export default DoctorsContext;
