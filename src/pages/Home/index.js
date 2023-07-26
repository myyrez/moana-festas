import React, { useState } from 'react';
import Navbar from '../../components/Navbar'
import './index.css'

const Home = () => {
    let homeNavData = 'false'

    return (
        <div id='main' className='main' data-nav={homeNavData}>
            <div className='hero-section'>
                <div className='title'>
                    <div className='title-container'>
                        <h1>trabalho incrível</h1>
                        <h1>uma festa inesquecível</h1>
                    </div>
                </div>
                <div className='images-container'>
                </div>
            </div>

            <Navbar homeNavData={homeNavData} />
        </div>
    )
}
export default Home