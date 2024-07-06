import React from "react";
import Batman from "../../images/batman_about.jpg";
import Tech from "../../images/tech.png";
import Project from "../../images/project.png";
import Machine from "../../images/machine-learning.png";

function About(){
    return(
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3 abouttit">Hey, I'm Calvin</h1>
        <p class="col-lg-10 fs-4 aboutdesc">I'm a full-stack web developer with a passion for creating fun, interesting, and creative projects. <img src={Project} alt="Project file image" height="20px" width="20px" /> I'm also a video editor and a former YouTuber. However, I couldn't limit myself to being just a YouTuber, and in the future, I aim to delve into machine learning as well. <img src={Machine} alt="Robot reading book" height="20px" width="20px" /> <br />   <br /> In my free time, I enjoy watching anime and exploring new trends in technology, such as gadgets and phones. <img src={Tech} alt="technology image" height="20" width="20" /> I'm also a car enthusiast and love discovering new upgrades and technologies used in cars. </p>
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
        <img class="aboutimg w3-animate-left" src={Batman} alt="Cute batman figurine" height="500px" width="300px" />
      </div>
    </div>
  </div>
    );
}

export default About;