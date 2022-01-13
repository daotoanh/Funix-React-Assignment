import React, { Component } from 'react'
import { Card, CardText, CardTitle } from 'reactstrap'
import dateFormat from 'dateformat'

class StaffList extends Component {

    constructor(props) {
        super(props)

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
            </div>
        )
    }
}


export default StaffList