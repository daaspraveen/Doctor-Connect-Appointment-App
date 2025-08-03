const HeroBgImage = "https://wallpapers.com/images/hd/lifeline-and-health-doctor-yten5a90xp37xcos.jpg";

const HeroSection = () => {
    return (
        <section className={`flex w-full flex-col items-left p-5 justify-center align-top h-[95vh] bg-cover max-md:bg-center bg-no-repeat attachment bg-center attach-fixed`}
            style={{ backgroundImage: `url(${HeroBgImage})` }}>
            <h1 className="w-[80vw] max-w-[650px] text-5xl font-bold text-gray-900 font-[Bungee] text-shadow-lg text-shadow-blue-200">Welcome to Doctor Connect</h1>
            <h4 className="text-2xl text-gray-800 font-bold font-sans pt-2">Your Health, Our Priority</h4>
            <div className="flex space-x-4 gap-10 pt-10">
                <a href='#doctors-list'
                    className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                    Get Started
                </a>
                <a href="#search-input"
                    className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300 ml-4">
                    Book Now
                </a>
            </div>
        </section>
    );
}

export default HeroSection;
