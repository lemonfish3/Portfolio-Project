import CarouselComponent from '../components/carousel';

function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
            <CarouselComponent />
            <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
            <a href="#projects">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    My Projects
                </button>
            </a>
        </div>
    );
}

export default Home