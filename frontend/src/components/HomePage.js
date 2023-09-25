import React from 'react'
import Navbar from './Navbar';
import Story from './Story';

function HomePage() {
    return (
        <div className='container'>
            <Navbar />
            <div>HomePage</div>
            <Story/>
            
        </div>

    )
}

export default HomePage