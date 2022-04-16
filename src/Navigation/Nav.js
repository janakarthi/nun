import React from 'react';
import {Link} from "react-router-dom";
import {Navbar, Nav,} from "react-bootstrap";
import logo from "../Component/img/logo.png";
class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="white" style={{
                                        fontSize:"30px",
                                        display: "flex",
                                        justifyContent:"space-between",
                                        }}>
                <Link style={{color: 'orange'}} to ={""}className="navbar-brand">
                  <img src={logo} height="70px" />
                </Link>

        <Nav style={{color: 'orange'}} >
            <Link to={""} className="nav-link">Home</Link>
            <Link to={"Portfolio"} className = "nav-link">Portfolio</Link>
            <Link to ={"contact"} className= "nav-link">Contact</Link>
        </Nav>

            </Navbar>
    
        )
    }
}
export default NavBar;