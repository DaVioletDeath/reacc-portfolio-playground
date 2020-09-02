import React from 'react';
import OnHand from '../assets/OnHand.png'
import CodeQuiz from '../assets/CodeQuiz.png'
import DayPlanner from '../assets/DayPlanner.png'
import FitnessTracker from '../assets/FitnessTracker.png'
import AboutMe from '../assets/AboutMe.png'
import FirstImpression from '../assets/FirstImpression.png'
import Project from "../components/Project"
export default function Portfolio(){
    return (
        <div className= "container-fluid">
            <h1>Portfolio</h1>
            <div className='row'>
    <Project title = 'OnHand' link = "https://msplawn.github.io/on-hand/" github = "https://github.com/msplawn/on-hand" gif = {OnHand} description = "Can’t go out and want to know how to make something using ingredients you have On Hand? This is the app for you." />
            <Project title = 'First Impression' link = "https://pacific-basin-52237.herokuapp.com/" github = "https://github.com/JoeWills615/First_Impression" gif = {FirstImpression} description = "Tired of all of those other dating apps, want to make a good First Impression? Find people with similar interests in food and restaurants and make the perfect first date and Impression." />
            <Project title = 'PW About Me Page' link = "https://davioletdeath.github.io/prework-about-me/" github = "https://github.com/DaVioletDeath/prework-about-me" gif = {AboutMe} description = "A pre-work assignment where I created my own webpage to detail facts about myself." />
            <Project title = 'Fitness Tracker' link = "https://fitness-tracker-v.herokuapp.com/" github = "https://github.com/DaVioletDeath/Fitness-Tracker" gif = {FitnessTracker} description = "Track your workout duration and exercises down with this handy, user friendly app!" />
            <Project title = 'Day Planner' link = "https://davioletdeath.github.io/Day-Planner/" github = "https://github.com/DaVioletDeath/Day-Planner" gif = {DayPlanner} description = "Busy day ahead of you and you don't know where to start in planning it out? It's time for your own Day Planner." />
            <Project title = 'Code Quiz' link = "https://davioletdeath.github.io/Code_Quiz/" github = "https://github.com/DaVioletDeath/Code_Quiz" gif = {CodeQuiz} description = "Test your coding mettle with this quiz!" />
            </div>
        </div>
    )
}