const HeroSection = () => {
    return (
        <div 
            className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white text-center" 
            style={{ 
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.pinimg.com/236x/14/07/29/140729b1f0146860cd7887cce9d925a2.jpg')"
            }}
        >
            <h1 className="text-5xl font-bold mb-4 text-white shadow-lg transition-transform duration-300 hover:scale-105">
                Connect, Collaborate, and Succeed with UniConnect
            </h1>
            <p className="mb-8 text-lg">
                UniConnect bridges the gap between students and opportunities, providing access to scholarships, internships, and a collaborative network. Empower your academic journey by connecting with universities and industry leaders to unlock your potential.
            </p>
            <div className="flex space-x-4">
                <a 
                    href="/get-started" 
                    className="bg-[#5e208f] text-white px-6 py-2 rounded hover:bg-[#5e208f] transition-transform duration-300 transform hover:scale-105"
                >
                    Get Started
                </a>
                <a 
                    href="#key-features" // Updated href to link to the Key Features section
                    className="bg-transparent border-2 border-purple-500 text-purple-500 px-6 py-2 rounded hover:bg-purple-500 hover:text-white transition-transform duration-300 transform hover:scale-105"
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
