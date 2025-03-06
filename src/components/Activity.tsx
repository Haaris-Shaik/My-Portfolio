import React from "react";
import mock09 from '../assets/images/choodoo.png';
import mock10 from '../assets/images/blogging.png';
import '../assets/styles/Project.scss';

function Activity() {
    return(
    <div className="projects-container" id="projects">
        <h1>Activities</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://learnwithhaaris.wordpress.com/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://learnwithhaaris.wordpress.com/" target="_blank" rel="noreferrer"><h2>Blogs</h2></a>
                <p>I write blogs about latest technologies, technical oppurtunities and self-improvement.</p>
            </div>
            <div className="project">
                <a href="https://www.youtube.com/channel/UCtyAMh9-aDgvJ7477Crbszw" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.youtube.com/channel/UCtyAMh9-aDgvJ7477Crbszw" target="_blank" rel="noreferrer"><h2>High Speed Chase</h2></a>
                <p>I enjoy making these animated songs and stories for kids.</p>
            </div>
        </div>
    </div>
    );
}

export default Activity;