import { Container, Card } from 'react-bootstrap';

import CameraDisplay from './CameraDisplay';

const RoverSelector = ({ roverState }) => {

  const roverKeys = Object.keys(roverState || {});

  return (
    <Container className='pt-3 pb-3'>
      {roverKeys.map(key => {
        return(
          <Container className='pt-3 pb-3 text-white'>
            <hr/>
            <h2>Rover Name: {roverState[key].name}</h2>
            <ul>
              <li>Status: {roverState[key].status}</li>
              <li>Launch Date: {roverState[key].launch_date}</li>
              <li>Landing Date: {roverState[key].landing_date}</li>
            </ul>
            <CameraDisplay cameras={roverState[key].cameras}/>
          </Container>
        )
      })}
    </Container>
  );
}
export default RoverSelector;