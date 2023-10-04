import React, { useEffect, useState } from 'react'
import './Navbar.scss'
// import { Link } from 'react-router-dom'
const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false)
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
        <div className={active ? " navbar active-bar" : "navbar"}>
            <div className='container'>
                <div className='logo'>
                    {/* <Link to="/"> */}
                    <span className='text'>fiverr</span>
                    {/* </Link> */}
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
                            <img src='https://as2.ftcdn.net/v2/jpg/04/31/64/75/1000_F_431647519_usrbQ8Z983hTYe8zgA7t1XVc5fEtqcpa.jpg' alt='' />
                            <span>{currentUser?.username}</span>
                            {open && <div className='options'>
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <span>Gigs</span>
                                            <span>Add New Gig</span>
                                        </>
                                    )
                                }
                                <span>Orders</span>
                                <span>Messages</span>
                                <span>Logout</span>
                            </div>}
                        </div>

                    )}
                </div>
            </div>
            {active && (
                <>
                    <hr />
                    <div className='menu'>
                        <span>Test</span>
                        <span>Test1</span>
                    </div>
                </>)}

        </div>
    )
}

export default Navbar