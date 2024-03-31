import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem, Button
} from 'reactstrap';
import { NavLink } from "react-router-dom";


const NavBar = ({ currentUser, logout }) => {
    return (
        <div className='navbar'>
            <Navbar color="light" light expand="md" className='navbars'>
                <NavbarBrand>
                    <NavLink to="/" className="navbar-brand">
                        Jobly
                    </NavLink>
                </NavbarBrand>
                {currentUser.username.length === 0 ?
                    <Nav>
                        <NavItem className='nav-link'>
                            <NavLink to="/login" className="inactive" activeClassName="active">Log In</NavLink>
                        </NavItem>
                        <NavItem className='nav-link'>
                            <NavLink to="/signup" className="inactive" activeClassName="active">Sign Up</NavLink>
                        </NavItem>
                    </Nav> :
                    <Nav navbar>
                        <NavItem className='nav-link'>
                            <NavLink to="/companies" className="inactive" activeClassName="active" >Companies</NavLink>
                        </NavItem>
                        <NavItem className='nav-link'>
                            <NavLink to="/jobs" className="inactive" activeClassName="active" >Jobs</NavLink>
                        </NavItem>
                        <NavItem className='nav-link'>
                            <NavLink to="/profile" className="inactive" activeClassName="active">Profile</NavLink>
                        </NavItem>
                        <NavItem className='nav-link'>
                            <button className="btn btn-outline-danger btn-sm" outline onClick={logout}>Log out</button>
                        </NavItem>
                    </Nav>
                }

            </Navbar>
        </div>
    )
}

export default NavBar;