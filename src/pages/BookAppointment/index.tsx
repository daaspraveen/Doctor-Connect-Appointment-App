import { useContext, useState } from "react";
import DoctorsContext from "../../contexts/DoctorsContext";

const initialBookingInfo = {
    id:'',
    patientName:'',
    email:'',
    dateTime:'',
    specialty:'',
};

const specialties = [
  "Cardiologist",
  "Pediatrician",
  "Dermatologist",
  "Orthopedic Surgeon",
  "Gynecologist & Obstetrician",
  "General Physician",
  "Ophthalmologist",
  "Gastroenterologist",
  "Endocrinologist",
  "Neurologist",
  "Psychiatrist",
  "Urologist",
  "Nephrologist",
  "Pulmonologist",
  "Oncologist",
  "ENT Specialist",
  "Physiotherapist",
  "Dietitian/Nutritionist",
  "Rheumatologist",
  "Emergency Medicine Physician"
];

const BookAppointment = () => {
    const {addBooking} = useContext(DoctorsContext);
    const [bookingInfo, setBookingInfo] = useState(initialBookingInfo);
    const [confirmationMessage, setConfirmationMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const currentDateTime = new Date().toISOString();
        const newBooking = {...bookingInfo,id: currentDateTime};
        console.log(newBooking);
        addBooking(newBooking);
        setBookingInfo(initialBookingInfo);
        setConfirmationMessage("Appointment Successfully booked.");
    };

    return (
        <div className="mx-auto p-6 bg-white rounded-lg shadow-md w-[90vw] max-w-[400px]">
            <h2 className="text-2xl font-bold pb-4">Book Appointment</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="patientName">
                        Patient Name *
                    </label>
                    <input
                        type="text"
                        id="patientName"
                        value={bookingInfo.patientName}
                        onChange={(e) => setBookingInfo(prev => ({...prev, patientName: e.target.value}))}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                        Email *
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={bookingInfo.email}
                        onChange={(e) => setBookingInfo(prev => ({...prev, email: e.target.value}))}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="dateTime">
                        Desired Date/Time *
                    </label>
                    <input
                        type="datetime-local"
                        id="dateTime"
                        value={bookingInfo.dateTime}
                        onChange={(e) => setBookingInfo(prev => ({...prev, dateTime: e.target.value}))}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="dateTime">
                        Specialty *
                    </label>
                    <select value={bookingInfo.specialty}
                        onChange={(e) => setBookingInfo(prev => ({...prev, specialty: e.target.value}))}
                        className="mt-1 block w-full max-h-[300px] border border-gray-300 rounded-md p-2"
                    >
                        {specialties.map((each, index) =>
                        <option key={index} value={each}>
                            {each}
                        </option>)}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full cursor-pointer bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Book Appointment
                </button>
            </form>
            {confirmationMessage && (
                <div className="mt-4 text-green-600">
                    {confirmationMessage}
                </div>
            )}
        </div>
    );
};

export default BookAppointment;
