import React from "react";

function Project(props){
    return (
        <div>
            <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={props.imagesrc} class="d-block mx-lg-auto img-fluid proimg" alt="Bootstrap Themes" width="800" height="600" loading="lazy"/>
      </div>
      <div class="col-lg-6 w3-animate-bottom">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 lead projtit"><a><img class="proimg" src={props.titleimage} alt="bat-mobile" height="35px" width="35px" /></a>{props.title}</h1>
        <p class="lead projdes">{props.description}</p>
        <a class="projhyp" href={props.projectlink} target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg linkpic" viewBox="0 0 16 16">
        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/></svg>Code files</a>
      </div>

    </div>
  </div>
        </div>
    );
};

export default Project;