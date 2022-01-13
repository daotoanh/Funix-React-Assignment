import React, {Component} from 'react'
import Staffslist from './StaffListComponent'
import StaffDetail from './StaffDetailComponent'
import StaffDepartment from './StaffDepartment'
import StaffSalary from './StaffSalary'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { STAFFS } from '../shared/StaffList'
import { DEPARTMENTS } from '../shared/StaffList'
import { Switch, Route, Redirect } from 'react-router-dom'



class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS
    }
    this.handleaddnewStaff = this.handleaddnewStaff.bind(this)
  }
  
   handleaddnewStaff = (staff) => {
    this.setState({
      staffs: [...this.state.staffs, staff]         
    })
}
    


  render() {
   const StaffWithId = ({match}) => {
       return(
           <StaffDetail staff={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId,10))[0]} />
       )
   }
   const newId = this.state.staffs.length + 1

    return (
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/staffs" component={() => <Staffslist staffs={this.state.staffs} newId={newId}  handleaddnewStaff={this.handleaddnewStaff}/>} />
        <Route exact path="/staffs/:staffId" component={StaffWithId} />  
        <Route exact path="/department" component={() => <StaffDepartment departments={this.state.departments} />} />
        <Route exact path="/salary" component={() => <StaffSalary staffs={this.state.staffs} />} />
        <Redirect to="/staffs" />     
        </Switch>
        <Footer />
      </div>
    )
  }
}



export default Main;
