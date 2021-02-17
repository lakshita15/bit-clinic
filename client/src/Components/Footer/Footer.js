import React from 'react';

import emergency from "../../Images/emergency.jpg"
import "./Footer.scss"
import sos from "../../Images/sos.gif"

const Footer = () => {
    return (
        <footer >
       <div className= "footer">
       <div className= "Container">
      
<div className= "description">
    <div className= "Heading">
Emergency SOS
    </div>
    <div className= "Content">
    <img src = {sos} alt = "sos"/>
    <a href="tel:112">Call us at 112</a>
    </div>
</div>
<img  src = {emergency} alt = ""></img>
</div>
       </div>
        </footer>
    );
}

export default Footer;









