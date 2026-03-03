import Card from '../components/card'
import game1 from '../images/game1.png';
import game2 from '../images/game2.png';
import project1 from '../images/project1.png';


function Projects() {
    return (
        <div className="flex flex-wrap justify-center items-stretch gap-8 p-8">
            <Card
                title="Project 1"
                description="Description of project 1"
                imageUrl={game1}
            />
            <Card
                title="Project 2"
                description="Description of project 2"
                imageUrl={game2}
            />
            <Card
                title="Project 3"
                description="Description of project 3"
                imageUrl={project1}
            />
        </div>
    );
}

export default Projects