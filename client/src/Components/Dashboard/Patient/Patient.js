import React, { Component } from "react";
import "./Patient.scss";
import patient from "../../../Images/DoctorProfile.jpg";
import Doctor from "../../../Images/doc.jpg";
class PatientDashboard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="Container">
          <div className="SideBar">
            <div className="PatientImage">
              <img src={patient} alt="patient"></img>
            </div>
            <div className="PatientName">MANAS SACHDEVA</div>
            <div className="Sidebar-links">
              <li>Age : 30</li>
              <li>Gender : MALE</li>
            </div>
          </div>
          <div className= "doctorcontainer">

          <div className="doctorr">
            <div className="DoctorDetails">
              <div className="DoctorImage">
                <img src={Doctor} alt="Doctor"></img>
              </div>
              <div className="DoctorName">Neha</div>
              <div className="DoctorAge">20</div>
              <div className="specialization"></div>
              <div className="gender">male</div>
              <button className="appointment">Book Appointment</button>
            </div>
          </div>
          
          <div className="doctorr">
            <div className="DoctorDetails">
              <div className="DoctorImage">
                <img src={Doctor} alt="Doctor"></img>
              </div>
              <div className="DoctorName">Neha</div>
              <div className="DoctorAge">20</div>
              <div className="specialization"></div>
              <div className="gender">male</div>
              <button className="appointment">Book Appointment</button>
            </div>
          </div>
          <div className="doctorr">
            <div className="DoctorDetails">
              <div className="DoctorImage">
                <img src={Doctor} alt="Doctor"></img>
              </div>
              <div className="DoctorName">Neha</div>
              <div className="DoctorAge">20</div>
              <div className="specialization"></div>
              <div className="gender">male</div>
              <button className="appointment">Book Appointment</button>
            </div>
          </div>
          <div className="doctorr">
            <div className="DoctorDetails">
              <div className="DoctorImage">
                <img src={Doctor} alt="Doctor"></img>
              </div>
              <div className="DoctorName">Neha</div>
              <div className="DoctorAge">20</div>
              <div className="specialization"></div>
              <div className="gender">male</div>
              <button className="appointment">Book Appointment</button>
            </div>
          </div>
        
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PatientDashboard;
