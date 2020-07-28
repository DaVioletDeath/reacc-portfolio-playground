import React from 'react';
import OnHand from '../assets/OnHand.png'
import Project from "../components/Project"
export default function Portfolio(){
    return (
        <div className= "container-fluid">
            <h1>Portfolio</h1>
            <div className='row'>
            <Project title = 'OnHand' link = "https://msplawn.github.io/on-hand/" github = "https://github.com/msplawn/on-hand" gif = {OnHand} />
            <Project title = 'First Impression' link = "https://msplawn.github.io/on-hand/" github = "https://github.com/msplawn/on-hand" gif = '' />
            <Project title = 'PW About Me Page' link = "https://msplawn.github.io/on-hand/" github = "https://github.com/msplawn/on-hand" gif = '' />
            <Project title = 'Employee Tracker App' link = "https://msplawn.github.io/on-hand/" github = "https://github.com/msplawn/on-hand" gif = '' />
            <Project title = 'Day Planner' link = "https://msplawn.github.io/on-hand/" github = "https://github.com/msplawn/on-hand" gif = '' />
            <Project title = 'Code Quiz' link = "https://msplawn.github.io/on-hand/" github = "https://github.com/msplawn/on-hand" gif = '' />
            </div>
        </div>
    )
}