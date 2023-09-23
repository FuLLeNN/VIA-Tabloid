import React from 'react'
import Navbar from './Navbar';
import Story from './Story';

function HomePage() {
    return (
        <div className='container'>
            <Navbar />
            <Story/>
            <div>HomePage</div>
        </div>

    )
}

export default HomePage