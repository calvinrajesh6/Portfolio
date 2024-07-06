import React from "react";
import Batman from "../../images/batman.jpg"


function Introduction(){
    return (
        <div className="intro">
          
                    <div class="px-4 py-5 my-5 text-center intro-in">
                    <img src={Batman} class="batmanintro" alt="cute-batman" width="175px" height="175px" />
    <h1 class="display-5 fw-bold text-body-emphasis "> <span class="introtitle">Hey, there!</span></h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4 introdesc">I'm Calvin, a Full-Stack Developer with a passion for creating web applications.</p>
    </div>
    
  </div>
  
        </div>

    );
}

export default Introduction;