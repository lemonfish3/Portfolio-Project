import Card from '../components/card'
import game1 from '../images/game1.png';
import game2 from '../images/game2.png';
import game3 from '../images/game3.gif';
import project1 from '../images/project1.png';
import project2 from '../images/project2.gif';
import project3 from '../images/project3.png';


function Projects() {
    return (
        <div className="min-h-screen">
            <h1 className="mt-8 pt-8 text-4xl font-bold mb-8">Game Projects</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 auto-rows-fr">
                <Card
                    title="Convalescence"
                    description="Convalescence is a 2D, action-RPG video game for PC developed in Unity. In this game,I led the game system design, defining and structuring the core gameplay mechanics to ensure a cohesive player experience. I implemented the character-switching system and designed the abilities and power-up mechanics to support strategic combat variety.               "

                    imageUrl={game1}
                    url="https://muuum.itch.io/convalescence"
                />
                <Card
                    title="Cave of Songs"
                    description="Cave of Songs is a rhythm game made in Unity. I designed and developed the rhythm gameplay scene, implementing the core interactive music mechanics and player timing systems. I also built a reusable music management system to handle audio transitions, synchronization, and scalable integration across different scenes."
                    imageUrl={game2}
                    url="https://maryzhou7799.itch.io/the-brew-beneath"
                />

                <Card
                    title="The Brew Beneath"
                    description="This project is a 2D simulation game designed to provide an interactive coffee shop management experience. In this project, I implemented UI components and core gameplay systems using Unity and C#, focusing on user interaction, system integration, and iterative testing within a collaborative team environment."
                    imageUrl={game3}
                    url="https://maryzhou7799.itch.io/the-brew-beneath"
                />
            </div>
            <h1 className="mt-6 text-4xl font-bold mb-8">Web Projects</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 auto-rows-fr">
                <Card
                    title="Cloudy"
                    description="Cloudy is a web platform designed to help college students find flexible, low-pressure study spaces. In this project, I designed and implemented the frontend UI/UX using Vite and React, focusing on creating a relaxing experience that encourages focus, flexibility, and a sense of community."
                    imageUrl={project1}
                    url="https://github.com/lemonfish3/CloudyApp"
                />

                <Card
                    title="Spotify Data Visualization"
                    description="This project is a web application designed to help users explore and analyze artist data through the Spotify Web API. In this project, I built a scalable frontend using JavaScript and TypeScript, focusing on efficient asynchronous data handling, performance optimization, and clear data presentation."
                    imageUrl={project2}
                    url=""
                />

                <Card
                    title="Sleep Tracker"
                    description="This web application is designed to help users record and monitor their sleep patterns. In this project, I developed the frontend interface using the Ionic framework, focusing on structured data input, intuitive form design, and a user-friendly experience for consistent daily tracking."
                    imageUrl={project3}
                    url=""
                />
                
            </div>
        </div>
    );
}

export default Projects