import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src='https://via.placeholder.com/800x400.png?text=First+Slide' alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='https://via.placeholder.com/800x400.png?text=Second+Slide' alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://via.placeholder.com/800x400.png?text=Third+Slide' alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;