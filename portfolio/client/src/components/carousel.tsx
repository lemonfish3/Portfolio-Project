import { useState } from 'react';

const slides = [
  {
    src: 'https://via.placeholder.com/800x400.png?text=First+Slide',
    caption: 'First slide label',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    src: 'https://via.placeholder.com/800x400.png?text=Second+Slide',
    caption: 'Second slide label',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    src: 'https://via.placeholder.com/800x400.png?text=Third+Slide',
    caption: 'Third slide label',
    text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  },
];

function CarouselComponent() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative w-full max-w-3xl overflow-hidden">
      <img
        src={slides[index].src}
        alt={slides[index].caption}
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-30 text-white">
        <h3 className="text-xl font-semibold">{slides[index].caption}</h3>
        <p className="text-sm">{slides[index].text}</p>
      </div>
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
      >
        →
      </button>
    </div>
  );
}

export default CarouselComponent;