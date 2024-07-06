import React from "react";
import Batman from "../../images/bat-black-silhouette-with-opened-wings.png";
function Header(){
    return(
        <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <img src={Batman} height="40" width="40" alt="Logo" /> 
        <span class="fs-4">Calvin Rajesh</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link current" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="https://drive.google.com/file/d/1HRSL9HM4w1sYpdUS7FwPtJKK49usXRP-/view?usp=sharing" target="blank" class="nav-link">Resume</a></li>
        <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
      </ul>
    </header>
  </div>
    )
}

export default Header;

