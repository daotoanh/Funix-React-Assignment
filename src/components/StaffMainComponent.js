import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import Staffslist from './StaffListComponent'
import StaffDetail from './StaffDetailComponent'
import { STAFFS } from '../shared/StaffList'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect } from 'react-router-dom'


class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            staffs: STAFFS,

        }
    }


    render() {

        const StaffWithId = ({ match }) => {
            return (
                <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]} />
            )
        }

        return (
            <div className='App'>
                <Header />
                <Switch>
                    <Route exact path="/staffs" component={() => <Staffslist staffs={this.state.staffs} />} />
                    <Route exact path="/staffs/:staffId" component={StaffWithId} />
                    <Redirect to="/staffs" />   
                </Switch>
                <Footer />
            </div>
        )
    }
}


export default Main;