
function About() {
    return (
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto p-10">
            <h1 className="text-4xl font-bold mb-4">Joy Yang</h1>
            <p className="text-lg text-gray-700 mb-8">
                Hi, I'm Joy, a software developer with a passion for creating innovative solutions. I have experience in full-stack development and enjoy working on projects that make a positive impact.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {['JavaScript', 'React', 'Node.js', 'Python'].map((skill) => (
                    <li
                        key={skill}
                        className="bg-gray-200 p-3 rounded text-center hover:bg-blue-500 hover:text-white transform transition-transform duration-300 hover:-translate-y-1"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default About;