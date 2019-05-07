import React from "react";
import "./ProjectCard.css";

// import {
//     Button,
//     Card,
//     CardImg,
//     CardText,
//     CardBody,
//     CardLink,
//     CardTitle,
//     CardSubtitle
// } from 'reactstrap';

const ProjectCard = props => (
    <div className="card text-white bg-dark">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div class="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.desc}</p>
            <a className="btn btn-primary" href={props.link} target="_blank">{props.button}</a>
        </div>
    </div>
);


export default ProjectCard;