import React from 'react'

const Navbar = ({ username }) => {
    return (
        <nav>
            <ul>
                <li><a href="" className="logo">Messenger</a></li>
                <li><a href="">{username}</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
