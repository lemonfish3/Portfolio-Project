import Card from '../components/card'


function Projects() {
    return (
        <div className="flex flex-wrap justify-center gap-8 p-8">
            <Card
                title="Project 1"
                description="Description of project 1"
                imageUrl="https://via.placeholder.com/150"
            />
            <Card
                title="Project 2"
                description="Description of project 2"
                imageUrl="https://via.placeholder.com/150"
            />
        </div>
    );
}

export default Projects