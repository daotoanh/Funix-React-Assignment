import React, { Component } from 'react'
import { Card, CardText, CardTitle } from 'reactstrap'

class StaffList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelect(staff) {
        this.setState({ selectedStaff: staff })
    }


    renderStaff(staff) {
        if (staff != null) {
            return (
                <Card>
                    <h4>Họ và tên: {staff.name}</h4>                 
                </Card>
            )
        }
        else {
            return (
                <div>
                    <div className='container'>
                        <h5>Bấm vào tên để xem thông tin</h5>
                    </div>
                </div>
            )
        }
    }



    render() {

        const staffList = this.props.staffs.map((staff) => {
            return (
                <div className="col-lg-2 col-md-4  col-12">
                    <Card key={staff.id}>
                        <Card onClick={() => this.onStaffSelect(staff)}>
                            <CardTitle>{staff.name}</CardTitle>
                        </Card>
                    </Card>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    {staffList}
                </div>
                <div className="row">
                    {this.renderStaff(this.state.selectedStaff)}
                </div>
            </div>
        )
    }
}


export default StaffList