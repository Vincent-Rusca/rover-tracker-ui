import './App.css';
import RoverSelector from './components/RoverSelector';
import DatePicker from './components/DatePicker';
import ApiContactErrorMessage from './components/ApiContactErrorMessage';

import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';

const App = () => {
  const defaultErrorState = {
    show: false,
    location: "",
    status: 0
  }

  const [roverState, setRoverState] = useState(null);
  const [apiContactError, setApiContactError] = useState(defaultErrorState);

  const getData=(date)=>{
    console.log('http://localhost:8080/MarsRoverTracker?date=' + date);
    fetch('http://localhost:8080/MarsRoverTracker?date=' + date)
      .then(response => response.json())
      .then(myJson => {
        console.log(myJson);
        if(myJson.error) {
          setApiContactError({
            show: true,
            location: myJson.location,
            status: myJson.status
          })
          setRoverState(null);
        } else {
          setRoverState(myJson.rovers);
          setApiContactError(defaultErrorState);
        }
      })
      .catch((error) => {
        console.log(error);
        setApiContactError({
          show: true,
          location: "My API",
          status: 503
        });
        setRoverState(null);
      });
   }

  return (
    <div>
      {console.log(apiContactError.show)}
      <Jumbotron className='p-5 align-items-center h-100 text-white jumbotron-title'>
        <h1>Mars Rover Tracker</h1>
        <p>
          Simply pick a date below and all available images from any* rover on mars will be displayed for you!
        </p>
        <sub>
          * there is only one rover on Mars at this time.
        </sub>
        <br />
        <br />
        <DatePicker getData={getData}/>
      </Jumbotron>
      <ApiContactErrorMessage apiContactError={apiContactError} setApiContactError={setApiContactError} defaultErrorState={defaultErrorState} />
      <RoverSelector roverState={roverState} />
    </div>
    
  );
}

export default App;
