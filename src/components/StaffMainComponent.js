import React, { Component } from 'react'
import Staffslist from './StaffListComponent'
import StaffDetail from './StaffDetailComponent'
import StaffDepartment from './StaffDepartment'
import DepartmentDetail from './DepartmentDetailComponent'
import StaffSalary from './StaffSalaryComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { postStaff, fetchStaffs, fetchDepartments, fetchStaffssalary, deleteStaff, updateStaff } from '../redux/ActionCreators'
import { TransitionGroup, CSSTransition } from 'react-transition-group'





const mapStateToProps = state => {
    return {
        staffs: state.staffs,
        departments: state.departments,
        staffssalary: state.staffssalary
    }
}

const mapDispatchToProps = dispatch => ({
    postStaff: (id, name, salaryScale, doB, startDate, department, annualLeave, overTime, salary, image) => dispatch(postStaff(id, name, salaryScale, doB, startDate, department, annualLeave, overTime, salary, image)),
    deleteStaff: (id) => dispatch(deleteStaff(id)),
    updateStaff: (updatedStaff) => dispatch(updateStaff(updatedStaff)),
    fetchStaffs: () => { dispatch(fetchStaffs()) },
    fetchDepartments: () => { dispatch(fetchDepartments()) },
    fetchStaffssalary: () => { dispatch(fetchStaffssalary()) }
})

class Main extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchStaffs();
        this.props.fetchDepartments();
        this.props.fetchStaffssalary();
    }



    render() {
        const StaffWithId = ({ match }) => {
            return (
                <StaffDetail staff={this.props.staffs.staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}
                    departments={this.props.departments}
                    staffs={this.props.staffs}
                    isLoading={this.props.staffs.isLoading}
                    errMess={this.props.staffs.errMess}
                    deleteStaff={this.props.deleteStaff}
                    staffId={match.params.staffId}
                    updateStaff={this.props.updateStaff}
                />
            )
        }

        const DepartmentWithId = ({ match }) => {
            return (
                <DepartmentDetail
                    departId={match.params.idDept}
                    staffs={this.props.staffs}
                    departments={this.props.departments}
                />
            )
        }


        return (
            <div className='App'>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
                        <Switch>
                            <Route exact path="/staffs" component={() => <Staffslist staffs={this.props.staffs} postStaff={this.props.postStaff} />} />
                            <Route exact path="/staffs/:staffId" component={StaffWithId} />
                            <Route exact path="/department" component={() => <StaffDepartment departments={this.props.departments} />} />
                            <Route exact path="/department/:idDept" component={DepartmentWithId} />
                            <Route exact path="/salary" component={() => <StaffSalary staffssalary={this.props.staffssalary} />} />
                            <Redirect to="/staffs" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        )
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));