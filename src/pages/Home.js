import React from 'react';


function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to My Portfolio!</h1>
            <p className="home-intro">Hello! I'm glad you're here. This portfolio showcases my work and skills.</p>
            <p>Here, you'll find:</p>
            <ul className="home-list">
                <li>My Projects</li>
                <li>Skills & Technologies</li>
                <li>About Me</li>
                <li>Contact Information</li>
            </ul>
            <p className="home-footer">Feel free to explore and reach out if you have any questions!</p>
        </div>
    );
}

export default Home;
