import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Staffslist from './StaffListComponent'
import StaffDetail from './StaffDetailComponent'
import { STAFFS } from '../shared/StaffList'
import Header from './HeaderComponent'
import Footer from './FooterComponent'


class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            staffs: STAFFS,
            selectedStaff: null
        }
    }


    onStaffSelect(staffId) {
        this.setState({ selectedStaffs: staffId });
    }

    render() {
        return (
            <div className='App'>
                <Header />
                <Navbar dark color='primary'>
                </Navbar>
                <Staffslist staffs={this.state.staffs}
                    onClick={(staffId) => this.onStaffSelect(staffId)} />
                <StaffDetail
                    staff={this.state.staffs.filter((staff) => staff.id === this.state.selectedStaff)[0]} />
                <Footer />
            </div>
        )
    }
}


export default Main;