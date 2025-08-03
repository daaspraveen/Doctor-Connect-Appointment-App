import { Link } from "react-router-dom";

const NotFound = () => (
    <div className="flex flex-col mt-[80px] items-center justify-center gap-5 p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
        <p className="text-md mb-6">The page you are looking for does not exist.</p>
        <Link to="/" className="text-gray-50 hover:bg-gray-950 p-2 px-5 hover:px-3 hover:rounded-md transition-all duration-300 bg-gray-900 text-md">Go back to Home</Link>
    </div>
)

export default NotFound;
