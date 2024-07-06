import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Introduction from "./Introduction";
import Project from "./Project";
import Footer from "./Footer";
import About from "./About";
import project1img from "../../images/chromedino.png"
import project1timg from "../../images/dinosaur.png";
import project2timg from "../../images/airplane.png";
import project2img from "../../images/familytracker.png"
import project3timg from "../../images/food.png";
import project3img from "../../images/recipefinder.png";


function App(){
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route index element={ 
                    <div>
                <Header></Header>
            <Introduction></Introduction>
            <hr />
            <Project id={3} title={" Recipe Finder"} imagesrc={project3img} titleimage={project3timg} projectlink="https://github.com/calvinrajesh6/Recipe-Finder" description={"I have built a user-friendly recipe finder website that allows anyone to search for recipes by entering dish names or ingredients. Utilizing the Spoonacular API, this web application simplifies the process of discovering recipes, making it easy for users to find culinary inspiration based on their specific ingredients or favorite dishes."}></Project>
            <hr />
            <Project id={2} title={" Travel tracker"} imagesrc={project2img} titleimage={project2timg} projectlink="https://github.com/calvinrajesh6/Travel-Tracker" description={"I've developed a travel tracker application that allows users to log the places they've visited. The app also supports adding new members, such as family or friends, to track their travel histories. Each member's visited locations are recorded and can be viewed for easy reference."}></Project>
            <hr />
            <Project id={1} title={" Dino Game"} imagesrc={project1img} titleimage={project1timg} projectlink="https://github.com/calvinrajesh6/Chrome-Dino-Game" description={"I've built a simplified version of the classic Google Chrome Dino game. This version implements similar mechanics, including jumping, obstacle generation, and high score tracking. The high scores are retained from past sessions to add a competitive element."}></Project>
            <Footer></Footer> 
            </div>
            }/>
            <Route path="/about" element={
                <div>
                    <Header></Header>
                    <About></About>
                    <Footer></Footer> 
                </div>
            }/>
            </Routes>
            </BrowserRouter>
        </div>
        
    );
}

export default App;