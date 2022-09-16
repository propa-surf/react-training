import React, {useState} from 'react'

function Header(){

    const [name, setName] = useState('The Person')
    const [url, setUrl] = useState('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')
    const clickButton = () => {
        setName('The other Person')
        setUrl('https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')
    }


    return (
        <div className='header-container'>
            <div className='logged-profile'>
                <p className='the-name'>{name}</p>
                <img className='profile' src={url} alt='Pic'/>
            </div>
            <button className='switch-profile' onClick={() => clickButton()}>Change Profile</button>
        </div>
    )
}

export default Header