import myPhoto from '../images/joy.jpg';

function About() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8">
            <div className="flex justify-center md:justify-end w-full md:w-1/4 h-full">
                <img src={myPhoto} alt="Joy Yang" className="align-left w-48 h-60 rounded-3xl" />
            </div>
            <div className="w-full md:w-1/2 h-full">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg text-gray-700 mb-8">
                Hi, I’m Joy, a third-year Game Design and Software Engineering student at the University of California, Irvine. I love building interactive and meaningful digital experiences, and I enjoy the energy of game jams and hackathons where ideas quickly turn into real projects.
                </p>
                <ul className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                    {[
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/joy-yang-a73894294/', external: true },
                        { name: 'Email', url: 'mailto:muqingyang2018@gmail.com', external: true },
                        { name: 'Github', url: 'https://github.com/lemonfish3', external: true },
                        { name: 'Resume', url: 'https://drive.google.com/file/d/1bvOAyi3Fo8fAZb8BteA5iqtHfRbIxN34/view?usp=sharing', external: true }
                    ].map((item) => (
                        <li key={item.name} className="text-gray-700 bg-blue-100 p-3 rounded text-center hover:bg-blue-200 hover:text-white transform transition-transform duration-300 hover:-translate-y-1">
                            <a
                                href={item.url}
                                target={item.external ? "_blank" : undefined}
                                rel={item.external ? "noopener noreferrer" : undefined}
                                className="block text-gray-700 bg-blue-100 p-3 rounded text-center hover:bg-blue-200 hover:text-white transform transition-transform duration-300 hover:-translate-y-1"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

export default About;