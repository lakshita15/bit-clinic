import React, { Component } from 'react';
import "./Patient.scss"
import patient from "../../../Images/DoctorProfile.jpg"
class PatientDashboard extends Component {
    state = {  }
    render() { 
        return ( 
            <div className= "SideBar">
                <div className= "PatientImage">
<img src = {patient} alt = "patient"></img>
                </div>
                <div className= "PatientName">
MANAS SACHDEVA
                </div>
                <div className="Sidebar-links">
        <li>Age : 30</li>
        <li>Gender : MALE</li>
        
         
        </div>
            </div>
         );
    }
}
 
export default PatientDashboard;