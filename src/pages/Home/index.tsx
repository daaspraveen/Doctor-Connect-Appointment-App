import { Search } from "@mui/icons-material";
import DoctorsList from "../../components/DoctorsList";
import HeroSection from "../../components/HeroSection";
import { useState } from "react";

const Home = () => {
    const [searchInp, setSearchInp] = useState('');

    return (
        <>
            <HeroSection />

            <section className="w-full flex flex-col items-center justify-center p-5">
                <div style={{ marginTop: "-50px" }} className="bg-gray-100 shadow-2xl p-5 text-center flex flex-col gap-2 items-center rounded-lg w-full max-w-[650px] m-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Your Doctor</h2>
                    <p className="text-md max-w-[500px] text-gray-600 mb-8 text-center">Browse through our list of experienced doctors and book your appointment today!</p>
                    {/* Placeholder for doctors list or search input */}
                    <div
                        id="search-input"
                        className="w-[350px] max-w-md px-3 flex justify-center has-[input:focus]:outline-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        style={{ marginBottom: "20px", marginTop: "20px" }}>
                        <input
                            type="search"
                            placeholder="Search for doctors, specialties..."
                            className="w-full max-w-[300px] p-2 outline-0"
                            value={searchInp}
                            onChange={e => setSearchInp(e.target.value)}
                        />
                        <Search className="text-gray-500 self-center cursor-pointer" width={30} />
                    </div>
                </div>
            </section>

            <DoctorsList searchValue={searchInp.trim()} />
        </>
    )
}

export default Home;
