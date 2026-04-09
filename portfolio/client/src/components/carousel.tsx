import { useState, useEffect } from 'react';
import game1 from '../images/game1.png';
import game2 from '../images/game2.png';
import game3 from '../images/game3.png';
import project1 from '../images/project1.png';
import project2 from '../images/project2.gif';
import project3 from '../images/project3.png';

const slides = [
  {
    src: project1,
    caption: '',
    text: '3/2026',
  },
  {
    src: project2,
    caption: '',
    text: '10/2025',  
  },
  {
    src: project3,
    caption: '',
    text: '11/2025',
  },
  {
    src: game1,
    caption: '',
    text: '4/2025',
  },
  {
    src: game2,
    caption: '',
    text: '10/2025',
  },
  {
    src: game3,
    caption: '',
    text: '3/2026',
  },
];

function CarouselComponent() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prev = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  const next = () =>
    setIndex((i) => (i + 1) % slides.length);


  useEffect(() => {
    if (isHovered) return; // pause when hovered

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 3000); // change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="group relative w-100 max-w-full mx-auto overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-80 overflow-hidden bg-blue-100">
        <img
          src={slides[index].src}
          alt={slides[index].caption}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/30 text-white items-stretch">
        <h3 className="text-xl font-semibold">
          {slides[index].caption}
        </h3>
        <p className="text-sm">{slides[index].text}</p>
      </div>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-black bg-black/0 opacity-0 group-hover:opacity-100 group-hover:bg-black/40 transition focus:outline-none focus:ring-0"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-black bg-black/0 opacity-0 group-hover:opacity-100 group-hover:bg-black/40 transition focus:outline-none focus:ring-0"
      >
        →
      </button>
    </div>
  );
}



export default CarouselComponent;