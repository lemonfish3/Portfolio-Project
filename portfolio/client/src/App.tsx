import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/nav'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import ImageAPI from './pages/image_api'

function App() {
  return (
    <div>
      <Nav/>
      <section id ="home">
        <Home/>
      </section>
      <section id ="about">
        <About/>
      </section>
      <section id ="projects">
        <Projects/>
      </section>
      <section id ="image_api">
        <ImageAPI/>
      </section>
    </div>
  );
}

export default App

