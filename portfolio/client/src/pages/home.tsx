
function Home() {
    return(
        <div>
            <h1>My Portfolio</h1>
            <p>Welcome to my portfolio!</p>
            <h2>Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Python</li>
            </ul>
            <button onClick={() => alert('Button clicked!')}>Click Me</button>
        </div>  
    )
}

export default Home