import React from "react";
import "./Hero.scss"
import image1 from "../../Images/appl.png"
import image2 from "../../Images/walk.gif"
const Hero = () => {
  return (
      <React.Fragment>

    <div id="Hero">
     
      <div id="Text">
        <h3>Healthy is the new </h3>
        <h1>HAPPY</h1>
      </div>
    </div>
    <div>
            <div className="quote">
                
                <h3 className="quote_content">“The art of medicine consists of amusing the patient while nature cures the disease.”</h3> 
                <span className="quote_name" ><span></span> ― Voltaire</span>
                
            </div>
        </div> 
    <section>
<div className= "Container">
<img  src = {image1} alt = ""></img>
<div className= "description">
    <div className= "Heading">
Eat Healthy
    </div>
    <div className= "Content">
Eat more fruits & Vegetables.
As, An APPLE a day keeps the DOCTOR away.
    </div>
</div>
</div>
<div className= "">
    
</div>
<div className= "Container">
<div className= "description">
    <div className= "Heading">
Have a Daily Walk
    </div>
    <div className= "Content">
        Walking daily after having food let's you digest your food and helps you to stay away from various diseaes.
    </div>
</div>
<img  src = {image2} alt = ""></img>
</div>


    </section>
      </React.Fragment>
  );
};

export default Hero;
