import Card from '../components/card'
import game1 from '../images/game1.png';
import game2 from '../images/game2.png';
import project1 from '../images/project1.png';


function Projects() {
    return (
        <div className="flex flex-wrap justify-center items-stretch gap-8 p-8 ">
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
                url="https://muuum.itch.io/cave-of-songs"
            />
            <Card
                title="Cloudy"
                description="Cloudy is a web platform designed to help college students find flexible, low-pressure study spaces. In this project, I designed and implemented the frontend UI/UX using Vite and React, focusing on creating a relaxing experience that encourages focus, flexibility, and a sense of community."
                imageUrl={project1}
                url="https://github.com/lemonfish3/CloudyApp"
            />
        </div>
    );
}

export default Projects