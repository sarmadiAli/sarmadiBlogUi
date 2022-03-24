import React from 'react'

export default function About() {
    return (
        // <div classNameName='about_content'>
        <div className="content_about">
            <div className="card_about ">
                <div className="firstinfo">
                    <img src="https://randomuser.me/api/portraits/lego/6.jpg" />
                    <div className="profileinfo">
                        {/* <h1>Francesco Moustache</h1> */}
                        <h3>Js & React Developer</h3>
                        <p className="bio">

                            An ambitious problem solver .
                            I have  experience of creating logical and innovative solutions to complex problems.
                            I am thorough and precise in everything I do, and have a keen interest in technology and web applications.
                            As someone who takes responsibility for his own personal development,
                            I am continually evaluating and upgrading my skills so that I stay at the cutting edge of web development..<br /><br />
                            <div class='contectMe'>
                                <p>Contect Me : </p>
                                <span className='devicon-google-plain colored'></span>
                                <span class="devicon-github-original-wordmark colored "></span>
                                <span class="devicon-linkedin-plain colored"></span>

                            </div>
                        </p>
                    </div>
                </div>
            </div>
            <div className="badgescard">
                <span class="devicon-javascript-plain "></span>
                <span class="devicon-typescript-plain colored "></span>
                <span class="devicon-react-original " ></span>
                <span class="devicon-nextjs-original colored "></span>
                <span class="devicon-redux-original colored"></span>
                <span class="devicon-css3-plain-wordmark colored"></span>
                <span class="devicon-tailwindcss-original-wordmark "></span>
                <span class="devicon-sass-original colored "></span>
                <span class="devicon-materialui-plain colored "></span>
                <span class="devicon-bootstrap-plain colored "></span>

            </div>
        </div>
        // </div>
    )
}
