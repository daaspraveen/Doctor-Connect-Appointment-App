import { Link } from "react-router-dom";

const Footer = () => (
    <footer className="bg-gray-800 p-3 px-5 text-white text-[12px] text-center">
        <p>&copy; 2023 Doctor Connect. All rights reserved by{" "}
            <Link to="https://praveend.netlify.app" className="italic underline">PraveenDas</Link>            
        </p>
    </footer>
)

export default Footer;
