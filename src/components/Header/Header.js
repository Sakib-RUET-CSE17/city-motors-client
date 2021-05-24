import React, { useContext } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <Navbar expand="lg" className='container'>
            <span className='font-weight-bolder'><Link to='/home'><h1>City Motors</h1></Link></span>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto pr-5">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/offers'>Offers</Link></li>
                    <li className='text-primary'>{loggedInUser.displayName}</li>
                </Nav>
                {
                    loggedInUser.email ?
                        < a href="/login"><button className='btn btn-secondary'>Logout</button></a>
                        :
                        <Link to='/login'><Button variant="outline-success">Login</Button></Link>
                }
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Header;