import {
  Accordion,
  Card,
  Container,
  Carousel,
} from 'react-bootstrap';

import PhotoCarousel from './PhotoCarousel';

const CameraDisplay = ({ cameras }) => {
  const cameraKeys = Object.keys(cameras || {});

  return (
    <Container className="pt-3 pb-3">
      <Accordion>
        {cameraKeys.map(key => {
          return(
            <Card bg="dark" border="warning" text="white">
              <Accordion.Toggle as={Card.Header} style={{cursor: 'pointer'}} eventKey={key}>
                {cameras[key].full_name} ({cameras[key].photos.length})
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={key}>
                <Card.Body>
                  <PhotoCarousel photos={cameras[key].photos} />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </Container>
  );
}

export default CameraDisplay;