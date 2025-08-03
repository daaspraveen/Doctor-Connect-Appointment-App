import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header"
import Home from "./pages/Home";
import DoctorProfile from "./pages/DoctorProfile";
import BookAppointment from "./pages/BookAppointment";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import YourBookings from "./pages/YourBookings";

import DoctorsContext from "./contexts/DoctorsContext";
import type { Doctor, Booking } from "./contexts/DoctorsContext";

const App = () => {
  const [doctorsData, setDoctorsData] = useState<Doctor[]>([]);
  const [userBookings, setUserBookings] = useState<Booking[]>([]);

  const addBooking = (bookingInfo: Booking) => {
    setUserBookings(prevBookings => [...prevBookings, bookingInfo]);
    console.log(bookingInfo, userBookings)
  };

  const removeBooking = (bookingId: string) => {
    setUserBookings(prevBookings => prevBookings.filter(e => e.id !== bookingId));
    console.log(bookingId, userBookings);
  };

  const getData = async () => {
    try {
      const response = await fetch('/DoctorsData.json');
      const data = await response.json();
      const modifyData = data.map((each:any) => ({
        id: each.id,
        name: each.name,
        specialty: each.specialty,
        availability_status: each.availability_status,
        experience_years: each.experience_years,
        bio: each.bio,
        next_available_date: each.next_available_date,
        isBooked: false,
      }))
      // console.log(modifyData);
      setDoctorsData(modifyData);
    } catch (error) {
      console.error("Failed to fetch doctors data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <BrowserRouter>
      <DoctorsContext.Provider value={{
        doctorsData,
        userBookings,
        addBooking,
        removeBooking,
      }}>
      <Header />
      <main className="flex flex-col z-[-1] min-h-[100vh] place-items-center justify-center" style={{marginTop: '-60px'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor-profile/:doctorId" element={<DoctorProfile />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/bookings" element={<YourBookings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      </DoctorsContext.Provider>
    </BrowserRouter>
  )
}

export default App;