import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false)

    const { pathname } = useLocation()
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])

    const currentUser = {
        id: 1,
        username: "Eswar",
        isSeller: true
    }
    return (
        <div className={(active || pathname !== "/") ? " navbar active-bar" : "navbar"}>
            <div className='container'>
                <div className='logo'>
                    <Link to="/" className='link'>
                        <span className='text'>fiverr</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className='links'>
                    <span>Fiverr Bussiness</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign in</span>
                    {!currentUser?.isSeller && <span>Become a seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && (
                        <div className='user' onClick={() => setOpen(!open)}>
                            <img src='https://as2.ftcdn.net/v2/jpg/04/31/64/75/1000_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg' alt='profile-image' />
                            <span>{currentUser?.username}</span>
                            {open && <div className='options'>
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <Link to="/mygigs" className='link'>Gigs</Link>
                                            <Link to="/add" className='link'>Add New Gig</Link>
                                        </>
                                    )
                                }
                                <Link to="/orders" className='link'>Orders</Link>
                                <Link to="messages" className='link'>Messages</Link>
                                <Link to="/" className='link'>Logout</Link>
                            </div>}
                        </div>

                    )}
                </div>
            </div>
            {active || pathname !== "/" && (
                <>
                    <hr />
                    <div className='menu'>
                        <Link className='link' to="/">
                            Graphics & Design
                        </Link>
                        <Link className='link' to="/">
                            Video & Animation
                        </Link>
                        <Link className='link' to="/">
                            Writing & Translation
                        </Link>
                        <Link className='link' to="/">
                            AI Services
                        </Link>
                        <Link className='link' to="/">
                            Disgital Marketing
                        </Link>
                        <Link className='link' to="/">
                            Music & Audio
                        </Link>
                        <Link className='link' to="/">
                            Programming & Tech
                        </Link>
                        <Link className='link' to="/">
                            Bussiness
                        </Link>
                        <Link className='link' to="/">
                            Lifestyle
                        </Link>
                    </div>
                    <hr />
                </>)}

        </div>
    )
}

export default Navbar