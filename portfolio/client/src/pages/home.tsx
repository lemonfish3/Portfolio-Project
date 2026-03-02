import Projects from "./projects.tsx"
import About from "./about.tsx"
import ImageAPI from "./image_api.tsx"


function Home() {
    return(
        <div>
            <h1>My Portfolio</h1>
            <Projects />
            <About />
            <ImageAPI />
        </div>
    )
}

export default Home