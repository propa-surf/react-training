import React from 'react'
import Profile from './Profile'
import Daily from './Daily'

function Webpage(){
    return (
        <div className='webpage-container'>
            <Profile/>
            <Profile/>
            <Daily/>
        </div>
    )
}

export default Webpage