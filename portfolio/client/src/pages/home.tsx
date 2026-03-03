import CarouselComponent from '../components/carousel';

function Home() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8">
            <div className="w-full md:w-1/2 h-full flex flex-col items-center md:items-start space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                    Hello, I'm Joy Yang!
                </h1>
                <h2 className="text-xl text-gray-600 text-center md:text-left">
                    Game Design and Software Engineering @UCI
                </h2>
                <a href="#projects">
                    <button className="bg-blue-100 text-black px-4 py-2 rounded hover:bg-blue-200 transform transition-transform duration-300 hover:-translate-y-1">
                        My Projects
                    </button>
                </a>
            </div>
            <div className="w-full md:w-1/2 h-full">
                <CarouselComponent />
            </div>
        </div>
    );
}

export default Home