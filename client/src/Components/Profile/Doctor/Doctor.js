import React, { Component } from 'react';
import "./Doctor.scss"
import {Form , Button , Col } from "react-bootstrap";
class Doctor extends Component {
    state = {  }
    render() { 
        return ( 
            <div className= "Doctor">

<Form id = "Doctor">
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
              <Form.Label>Specialization</Form.Label>
              <Form.Control type="Text" placeholder=" Enter Specialization" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
            </div>
         );
    }
}
 
export default Doctor;
 
