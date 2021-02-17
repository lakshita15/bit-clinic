import React, { Component } from 'react';
import "./Patient.scss"
import {Form , Button , Col } from "react-bootstrap";
class Patient extends Component {
    state = {  }
    render() { 
        return ( 
<Form id = "Patient">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="Name" placeholder="Enter Name" />
              
            </Form.Group>   
    
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control type="Age" placeholder="Enter Age" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Gender</Form.Label>
      <Form.Control as="select" defaultValue="Gender">
        <option>Male</option>
        <option>Female</option>
      </Form.Control>
    </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Any Past Disease</Form.Label>
              <Form.Control type="Text" placeholder=" Enter Disease" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
         );
    }
}
 
export default Patient;
 
