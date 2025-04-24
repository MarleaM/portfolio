import React from 'react';
import background from '../assets/home-bg.jpg';
import pfp from '../assets/pfp.jpg';

const Hero = () => {
    return(
        <section className = "hero" style = {{backgroundImage: `url(${background})`}}>
            <div className = "hero_content">
                <div className="hero_left_content">
                    <img src={pfp} alt="Profile" />
                </div>
                <div className = "hero_right_content">
                    <h1>Hello world, I am Marlea</h1>
                    <p>Junior Computer Science major at Swarthmore College, interested in all things database development and software engineering.</p>
                    <a href = "a"> Discover More </a>     
                </div>
            </div>
        </section>
    )

}
export default Hero; 