import React from 'react'
import './index.css'

const Navbar = ({ homeNavData }) => {
    const toggleNav = () => {
        document.getElementById('main').dataset.nav = document.getElementById('main').dataset.nav === 'true' ? 'false' : 'true'
        homeNavData = homeNavData === 'true' ? 'false' : 'true'
    }

    return (
        <>
            <nav>
                <div id='nav-links'>
                    <a className='nav-link'>
                        <h2 className='nav-link-label'>oi</h2>
                        <img className='img-placeholder' src='https://images.unsplash.com/photo-1687789256307-839c77ed376d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1033&q=80'></img>
                    </a>
                    <a className='nav-link'>
                        <h2 className='nav-link-label'>oi</h2>
                        <img className='img-placeholder' src='https://images.unsplash.com/photo-1687851898832-650714860119?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'></img>
                    </a>
                    <a className='nav-link'>
                        <h2 className='nav-link-label'>oi</h2>
                        <img className='img-placeholder' src='https://images.unsplash.com/photo-1685369018466-5daddafa8146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'></img>
                    </a>
                    <a className='nav-link'>
                        <h2 className='nav-link-label'>oi</h2>
                        <img className='img-placeholder' src='https://plus.unsplash.com/premium_photo-1679026956879-05c0a4e63f3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'></img>
                    </a>
                </div>
            </nav>

            <div id='nav-toggle-bottom' onClick={toggleNav}></div>
        </>
    )
}

export default Navbar