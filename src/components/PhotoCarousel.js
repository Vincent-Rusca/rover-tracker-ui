import {
  Card,
  Carousel,
} from 'react-bootstrap';

const PhotoCarousel = ({ photos }) => {
  const photoKeys = Object.keys(photos);

  return (
    <Carousel interval={null} nextLabel="" prevLabel="" fade={true}>
      {photoKeys.map(key => {
        return (
          <Carousel.Item>
            <Card.Img src={photos[key]} />
            <Carousel.Caption>{parseInt(key) + 1}/{photos.length}</Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default PhotoCarousel;