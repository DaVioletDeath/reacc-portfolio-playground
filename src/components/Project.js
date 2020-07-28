import React from 'react';
export default function Project({title, link, github, gif}){
    return (
        <div className="col-4 mt-3">
        <div className="card">
            <img src={gif} className="card-img-top" alt={title}/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <a href= {link} className="btn text-light" style={{backgroundColor:'#8D07F6'}}>Deployed Site</a>
            <a href={github} className="ml-3 btn text-light" style={{backgroundColor:'#8D07F6'}}>Github Repo</a>
            </div>
        </div>
        </div>
    )
}