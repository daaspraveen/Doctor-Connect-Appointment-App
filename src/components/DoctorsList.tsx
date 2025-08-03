import { useContext } from "react";
import DoctorsContext from "../contexts/DoctorsContext";
import DoctorCard from "./DoctorCard";

const renderDoctorsListFailure = () => (
    <div className="text-center text-red-500">
        <p>Failed to load doctors list. Please try again later.</p>
    </div>
);

const renderEmptyDoctorsList = () => (
    <div className="text-center text-red-500">
        <p>No Doctors or Specialty Doctors Found based on search input</p>
    </div>
)

interface Doctor {
    id: string | number;
    name: string;
    specialty: string;
    availability_status: string;
}

interface SearchInputProp {
    searchValue: string;
}

const DoctorsList = ({searchValue}: SearchInputProp) => {
    console.log(searchValue)
    const { doctorsData } = useContext(DoctorsContext) as {doctorsData: Doctor[]};

    const filteredDoctorsData = doctorsData.filter(each =>
        each.name.toLowerCase().includes(searchValue.toLowerCase())
        || each.specialty.toLowerCase().includes(searchValue.toLowerCase())
    );

    const renderDoctorsList = () => {
        return (
            <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDoctorsData.map((eachDoctor: any) => (
                    <DoctorCard key={eachDoctor.id} doctor={eachDoctor} />
                ))}
            </ul>
        );
    }

    return (
        <section id="doctors-list" className="w-full max-w-4xl min-h-[40vh] pb-[100px] shadow-md rounded-lg p-6">
            {doctorsData && doctorsData.length > 0
                ? renderDoctorsList()
                : renderDoctorsListFailure()
            }
            {filteredDoctorsData.length === 0 && 
                renderEmptyDoctorsList()
            }
        </section>
    );
}

export default DoctorsList;