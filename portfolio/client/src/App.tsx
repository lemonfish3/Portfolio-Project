import './index.css';
import Nav from './components/nav';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import ImageAPI from './pages/image_api';
// import Contact from './pages/contact';

function App() {
  return (
    <div>
      <Nav />

      <section id="home" className="min-h-screen w-full flex items-center justify-center">
        <div className="max-w-7xl w-full px-5 py-10 flex flex-col items-center text-center gap-8">
          <Home />
        </div>
      </section>

      <section id="about" className="min-h-screen w-full flex items-center justify-center">
        <div className="max-w-7xl w-full px-5 py-10 flex flex-col items-center text-center gap-8">
          <About />
        </div>
      </section>

      <section id="projects" className="min-h-screen w-full flex items-center justify-center">
        <div className="max-w-7xl w-full px-5 py-10 flex flex-col items-center text-center gap-8">
          <Projects />
        </div>
      </section>

      <section id="image_api" className="min-h-screen w-full flex items-center justify-center">
        <div className="max-w-7xl w-full px-5 py-10 flex flex-col items-center text-center gap-8">
          <ImageAPI />
        </div>
      </section>

      {/* <section id="contact" className="min-h-screen w-full flex items-center justify-center">
        <div className="max-w-7xl w-full px-5 py-10 flex flex-col items-center text-center gap-8">
          <Contact />
        </div>
      </section> */}
    </div>
  );
}


export default App