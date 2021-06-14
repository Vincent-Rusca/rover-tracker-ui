import React from 'react'

import { Form, Button } from 'react-bootstrap';


const DatePicker = ({ setDate, getData }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj.date);
    if(formDataObj.date === "") alert('Please choose a date.');
    else {
      getData(formDataObj.date);
    }
  }

  return(
    <div>
      <div className="row d-flex justify-content-center">
        <Form className="col-md-3" onSubmit={handleSubmit}>
          <Form.Group controlId="get-rover-date">
            <Form.Label>Select Date:</Form.Label>
            <div className="d-flex justify-content-center">
              <Form.Control type="date" name="date" placeholder="Select date"
                style={{backgroundColor: "#212529", color: "white"}} className="border-warning" />
              <Button className="border-warning" variant="dark" type="submit">Submit</Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}


export default DatePicker;