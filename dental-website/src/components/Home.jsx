import React from 'react'
import '../css/home.css'
import Pic from '../images/pic1.png';
import Pic2 from '../images/pic2.png'

const Home = () => {
    return (
        <div className="home">
            <div className="left-box">
                <h1>Welcome to our website!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
                    . Necessitatibus, voluptates? Voluptatum quo eaque</p>
            </div>
            <div className="right-box">
                <div className="img-box">
                    <img src={Pic2} alt="pic" />


                </div>
                <div className="content">
                    <p> Dr.Adam Willis</p>
                    <span> Dental Sargon</span>
                </div>
            </div>


        </div>)
}

export default Home