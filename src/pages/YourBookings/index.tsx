import { useContext } from "react";
import DoctorsContext from "../../contexts/DoctorsContext";
import { Delete } from "@mui/icons-material";

import type { Booking } from "../../contexts/DoctorsContext";

const YourBookings = () => {
  const { userBookings, removeBooking } = useContext(DoctorsContext) as { userBookings: Booking[]; removeBooking: (id: string) => void;};

  console.log(userBookings)

  return (
    <section className="max-w-4xl mx-auto p-4 min-h-[80vh] w-full">
      <h1 className="text-2xl font-bold mb-4 text-center">Your Bookings</h1>
      {userBookings?.length === 0 ? (
        <p className="text-gray-500 text-center">You have no upcoming bookings.</p>
      ) : (
        <ul className="space-y-4 justify-start flex flex-wrap gap-2">
          {userBookings?.map((booking) => (
            <li
              key={booking.id}
              className="border rounded-md p-4 shadow-sm bg-white flex flex-row justify-start align-middle flex-1/2"
            >
              <div 
                className="flex flex-col justify-start align-middle flex-1/2"
                >
                <p><strong>Specialty:</strong> {booking.specialty}</p>
                <p><strong>Date & Time:</strong> {booking.dateTime}</p>
                <p><strong>Patient Name:</strong> {booking.patientName}</p>
                <p><strong>Patient Email:</strong> {booking.email}</p>
              </div>
              <button type="button" onClick={() => removeBooking(booking.id)}>
                  <Delete width={30}/>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default YourBookings;
