import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import DoctorsContext from "../../contexts/DoctorsContext";

const renderFailure = () => (
    <div className="text-center text-red-500">
        <p>No Doctor Found.</p>
    </div>
);

interface DoctorInfo{
    id: string | number;
    name: string;
    specialty: string;
    availability_status: string;
    experience_years: number;
    bio: string;
    next_available_date: string;
    isBooked: boolean;
}

const DoctorProfile = () => {
    const {doctorsData} = useContext(DoctorsContext) as {doctorsData: DoctorInfo[]};
    const path = useLocation()
    const docId =path.pathname.split(':')[1];
    console.log(docId);
    const doctorInfo = doctorsData.find(d => docId === d.id) || null;
    console.log(doctorInfo)

    const renderDetails = () => (
        <div className="flex flex-row align-middle justify-between self-start gap-4 max-md:flex-col pt-15">
            <div className="flex justify-start align-middle flex-wrap w-[300px] max-md:w-full max-md:justify-center">
                <img 
                    src={`/doc-profiles/${doctorInfo?.name}.jpg`} 
                    alt={`${doctorInfo?.name}'s profile`} 
                    className="w-[250px] max-md:w-full max-w-[300px] h-auto aspect-[3/4] object-cover rounded-4xl shadow-lg shadow-blue-400"
                />
            </div>
            <div className="flex flex-col justify-between gap-2">
                <h2 className="text-3xl font-[Bungee] font-light">{doctorInfo?.name}</h2>
                <p className="text-lg text-gray-600">{doctorInfo?.specialty}</p>
                <p className="text-sm text-gray-500"><strong>Experience: </strong>{doctorInfo?.experience_years} years</p>
                <p className="text-sm text-gray-500"><strong>Status: </strong>
                    <span style={{ color: doctorInfo?.availability_status === "Available Today" ? "green" : "red" }}>
                        {doctorInfo?.availability_status}
                    </span>
                </p>
                <hr className="text-gray-500 bg-blue-500 h-0.5"/>
                <p className="mt-2 text-gray-500 text-sm"><strong>Bio: </strong>{doctorInfo?.bio}</p>
                <p className="mt-2 text-gray-500 text-sm"><strong>Next Availability: </strong>{doctorInfo?.next_available_date}</p>
                
                <Link to='/book-appointment'
                    className={`w-max rounded-lg transition-all duration-150 px-3 py-2 self-end align-bottom text-white text-sm font-semibold text-shadow-md text-shadow-gray-600
                        ${!doctorInfo?.isBooked && doctorInfo?.availability_status!=="Fully Booked" ? 'hover:px-5 hover:scale-102 bg-blue-400': 'bg-gray-500 text-black'}`}
                >
                    Book an Appointment
                </Link>
                {doctorInfo?.isBooked && 
                    <p className="self-end text-[12px] text-red-500 font-semibold">! Already Booked</p>
                }
                {doctorInfo?.availability_status==="Fully Booked" && 
                    <p className="self-end text-[12px] text-red-500 font-semibold">X No Bookings</p>}
            </div>
        </div>
    )

    return(
        <section className="min-h-full flex justify-center align-middle p-4">
            {doctorInfo ?
            renderDetails() : renderFailure()}
        </section>
    )
}

export default DoctorProfile;
