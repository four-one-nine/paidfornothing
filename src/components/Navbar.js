import React, {useState} from 'react';
import '../index.css';
import {Link} from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    //Handles the menu icon click
    const [click, setClick] = useState(false); //Will default both the click states to false
    const handleClick = () => setClick(!click); //When clicked, will updated setClick to the opposite of whatever the current state is

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">Paid for Nothing.</Link> {/* The Site logo */}
        </div>
        <div className='menu-icon fill-black' onClick={handleClick}> {/* Menu Icon activated onclick */}
                <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-info-circle'} /> {/* switches between two icons */}
        </div>
        <div className={click ? 'info-menu active' : 'info-menu'}> {/* Shows when Info menu active */}
            <div className='info-item'>
                <h1>About this App</h1>
                <p>Hi! If you're reading this, you may be wondering what this app exists for. Here's a little story!</p>
                <p>There was a period of time I was doing an internship at a company during school. When we started there, the onboarding process got messed up, meaning that my co-worker and I were both left without a company computer. This was a problem because the responsbilities of the job were 100% on the computer, meaning that we couldn't do our job! While we waited for this issue to get sorted out, our supervisor told us to "Make it look like we're doing something".</p>
                <p>So my co-worker and I brought in our own personal laptops and programmed the first ever version of this app onto an Arduino. The idea being simple - we were being paid to sit at our desks and do nothing, and we wanted to see just how much we were being paid for it!</p>
                <p>Years later, I decided I wanted to venture into learning some of the basics of React & JS. This app immediately came to mind as one of the projects which would work really well as a starter project, so here we are!</p>
            </div>    
        </div>
    </nav>
  )
}

export default Navbar
