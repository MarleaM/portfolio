import React from "react";

const Links = () => {

    return (
        <section>
            <div className = "links"> 
                <div className = "links_content">
                    <a href = "a" className = "links_box">
                        <h1>GitHub</h1>
                        <p>Check out my public projects</p>

                    </a>
                    <a href = "a"className = "links_box">
                        <h1>LinkedIn</h1>
                        <p>Connect with me</p>

                    </a>
                    <a href = "a" className = "links_box">
                        <h1>Resume</h1>
                        <p>Download or view my resume</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Links;