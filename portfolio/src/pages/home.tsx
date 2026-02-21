import Card from '../components/card.tsx'
import Nav from '../components/nav.tsx'

function Home() {
    return(
        <div>
            <Nav />
            <h1>Joy Yang</h1>
            <Card title="Project 1" description="Description of project 1" imageUrl="https://via.placeholder.com/150" /> 
            <Card title="Project 2" description="Description of project 2" imageUrl="https://via.placeholder.com/150" />
        </div>
    )
}

export default Home