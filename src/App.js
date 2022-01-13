import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import { STAFFS } from './shared/StaffList'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      staffs: STAFFS
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
}



export default App;
