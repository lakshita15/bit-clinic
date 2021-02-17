import React, { Component } from 'react';
import "./Register.scss"
import {Form , Button ,DropdownButton , Dropdown} from "react-bootstrap";
class Register extends Component {
    state = {  }
    render() { 
        return ( 
          <div className= "Register">

            <Form id = "Register">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>   
    
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
             <div className= "dropdown">

        <DropdownButton id="dropdown-item-button" title=" Profession">
  <div className="dropdown-links">

  <Dropdown.Item as="button"> <a href = ""><li>Doctor</li></a> </Dropdown.Item>
  
  <Dropdown.Item as="button"> <a href = ""><li>Patient</li></a> </Dropdown.Item>
  </div>
</DropdownButton>
        </div>
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
         );
    }
}
 
export default Register;