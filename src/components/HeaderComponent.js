import React, { Component } from "react";
import { Navbar, NavItem, Nav } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar dark color="primary" dark expand="md">
                    <div className="container">
                        <Nav navbar className="mr-auto">
                            <NavItem>
                                <img src="/assets/images/logo.png" height="30" width="50" alt="logo" />
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/staffs">
                                    <span className="fa fa-users fa-lg"> Nhân viên</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/department">
                                    <span className="fa fa-address-book fa-lg"> Phòng Ban</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/salary">
                                    <span className="fa fa-money fa-lg"> Bảng Lương</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        )
    }
}


export default Header
