import React from 'react'
import logo from '../Assests/Group 269.png'
import logo1 from '../Assests/Group 274.png'
import logo2 from '../Assests/Group 271.png'
import logo3 from '../Assests/Group 291.png'
import "./About.css"

const About = () => {
  return (
    <div>
    <div className='first-para'>
        <div>
        <img src={logo} alt="" srcset="" />
        </div>

        <div className='first-para-content'>
            <h1>OUR STORY</h1>

            <p>
                We're Christopher and Shawn, the founders of DRIVER. What 
                makes us good friends and business partners is our passion 
                for people, creative solutions, sustainablity, and electric 
                vehicles. One weekend, during a backpacking trip in the San Bernardino 
                National Forest, we discoverd we could make a positive impact on our planet even after we left the 
                forest. Thus, DRIVER was born. Through self-subtainable vehicles, we could prevent carbon
                emissions from harming the enviornment. With one rental company, our goal is to inspire the community and the world to opt out of
                renting gas.powered vehicles and rent sustainable all-elecric cars instead.
            </p>


        </div>
        <div className='first-para-logo'>
            <img src={logo1} alt="" />
        </div>
    </div>

    <div className='second-para'>
        <div className='second-para-logo2'>
            <img src={logo2} alt="" />
        </div>

        <div className='second-para-content'>
            <h1>OUR MISSION</h1>

            <p>
            We aim to provide safe, convenient, fun, alternative transportation for short and intermediate travel. 
            We’re the sustainable companion to your girls’ trip, guys' trip, or business trip. With a convenient, virtual,
            frictionless rental process, fast delivery, and safe transportation, you never have to sweat your travel logistics 
            again. Environmentally conscientious customers love us and we love them. By softening our environmental impact, 
            we’re inspiring our community to replace gas-powered vehicle rentals with all-electric vehicle rentals. Zero guilt. All fun.
            </p>
        </div>

        <div className='second-para-logo3'>
            <img src={logo3} alt="" />
        </div>
    </div>

    <div>
        <footer>
            <p>Footer</p>
        </footer>
    </div>
    </div>
  )
}

export default About