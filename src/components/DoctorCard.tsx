import { memo} from "react";
import { Link } from "react-router-dom";

type doctor = {
    id: string | number;
    name: string;
    specialty: string;
    availability_status: string;
}

interface DoctorCardProps {
    doctor: doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = memo(({ doctor }) => {
    const { id, name, specialty, availability_status } = doctor;
    // console.log(id, name, specialty, availability_status);

    return (
        <li key={id}
            className="doctorCard flex max-w-[400px] flex-row flex-wrap items-center justify-center align-middle gap-2 p-4 border-b border-gray-200 bg-gray-100 hover:shadow-2xl shadow-blue-200 hover:rounded-xl hover:scale-102 hover:bg-gray-50 transition-all duration-150"
        >
            <img src={`/doc-profiles/${name}.jpg`} alt={`${name}'s profile`}
                className="w-[35%] h-max max-w-[100px] object-top aspect-square object-cover rounded-full doctorCard-hover:rounded-2xl"
            />
            <div className="flex flex-col w-[65%] items-left justify-end align-middle mt-4">
                <h3 className="text-lg font-semibold text-gray-800 font-mono">{name}</h3>
                <p className="text-sm text-gray-600">{specialty}</p>

            </div>

            <div className="flex flex-row items-center justify-between align-middle mt-4 w-full">
                <Link to={`/doctor-profile/:${id}`}
                    className="text-[10px] max-w-[120px] justify-center align-baseline bg-blue-300 hover:shadow-sm shadow-gray-500 rounded-md p-2 font-semibold h-auto inline-flex inset-0 w-full opacity-100 hover:opacity-100 transition duration-200"
                >View Details</Link>
                <p
                    className="text-[12px] text-gray-500 relative mt-auto flex justify-center align-middle"
                    style={{
                        color:
                            availability_status === "Available Today"
                                ? "green"
                                : availability_status === "Fully Booked"
                                    ? "red"
                                    : availability_status === "On Leave"
                                        ? "orange"
                                        : "gray",
                    }}
                >
                    <span className="text-6xl rounded-full absolute left-[-20px] top-[-110%]">&#183;</span> {availability_status} 
                </p>
            </div>
        </li>
    );
})

export default DoctorCard;