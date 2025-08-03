import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

import { useEffect, useState } from "react";

const Header = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollHeight(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        setScrollHeight(window.scrollY);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header style={{ background: scrollHeight > 0 ? 'rgba(255, 255, 255)' : 'transparent',boxShadow: scrollHeight > 0 ? '0 2px 4px rgba(0, 0, 0, 0.5)' : 'none' }}
            className="z-1 p-3 px-5 max-h-[60px] flex justify-between items-center w-full sticky top-0 left-0 right-0 transition-all duration-300 ease-in-out">
            <span className="object-cover flex justify-center align-middle gap-1">
                <img src="/dc-logo.jpg" alt="" className="max-w-[40px] max-h-[40px] aspect-square mix-blend-multiply" />
                <p className="w-max flex justify-center self-center align-middle text-md font-light font-[Delius_Swash_Caps]">Doctor Connect</p>
            </span>
            <nav className="flex justify-between items-center z-1 max-md:bg-gray-50 rounded-sm">
                {/* Desktop Nav buttons */}
                <ul className="p-0 m-0 min-md:flex justify-center gap-9 text-gray-800 max-md:hidden">
                    <li className="hover:underline">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="hover:underline">
                        <Link to="/bookings">Your Bookings</Link>
                    </li>
                    <li className="hover:scale-102 transition-transform">
                        <Link to="/book-appointment" className="bg-gray-900 py-2 px-3 rounded-md text-white">Book Appointment</Link>
                    </li>
                </ul>
                {/* Mobile Nav buttons */}
                <div className="min-md:hidden max-md:flex">
                    <MobileMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header;
