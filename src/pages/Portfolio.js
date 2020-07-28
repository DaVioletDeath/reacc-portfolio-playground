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
            <Project title = 'OnHand' link = "https://msplawn.github.io/on-hand/" github = "https://github.com/msplawn/on-hand" gif = {OnHand} />
            <Project title = 'First Impression' link = "https://pacific-basin-52237.herokuapp.com/" github = "https://github.com/JoeWills615/First_Impression" gif = {FirstImpression} />
            <Project title = 'PW About Me Page' link = "https://davioletdeath.github.io/prework-about-me/" github = "https://github.com/DaVioletDeath/prework-about-me" gif = {AboutMe} />
            <Project title = 'Fitness Tracker' link = "https://fitness-tracker-v.herokuapp.com/" github = "https://github.com/DaVioletDeath/Fitness-Tracker" gif = {FitnessTracker} />
            <Project title = 'Day Planner' link = "https://davioletdeath.github.io/Day-Planner/" github = "https://github.com/DaVioletDeath/Day-Planner" gif = {DayPlanner} />
            <Project title = 'Code Quiz' link = "https://davioletdeath.github.io/Code_Quiz/" github = "https://github.com/DaVioletDeath/Code_Quiz" gif = {CodeQuiz} />
            </div>
        </div>
    )
}