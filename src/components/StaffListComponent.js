import React, { useState } from 'react'
import {
    Card, CardImg, CardTitle, Form, Button, Input,
} from 'reactstrap'

import { Link } from 'react-router-dom'


function RenderStaffList({ staff, onClick }) {
    return (
        <Card>
            <Link to={`/staffs/${staff.id}`} >
                <CardImg src={staff.image} alt={staff.name} />
            </Link>
            <CardTitle className='center'>{staff.name}</CardTitle>
        </Card>
    )
}



const StaffList = (props) => {
    const [staffs, setStaffs] = useState(props.staffs)
    const [searchStaff, setSearchStaff] = useState(" ")
    

    const staffList = staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-lg-2 col-md-4 col-12">
                <RenderStaffList staff={staff} />
            </div>
        )
    })



    return (
        <div className="container">
            <div className="row">
                <div className='col-3'>
                </div>
                <div className='col-8'>
                    <Form>
                        <div className='row headersearch'>
                            <div className='col-6'>
                                <Input type="text" id="searchname" name="searchname" placeholder="Tên nhân viên..."
                                    />
                            </div>
                            <div className='col-1'>
                                <Button type="submit" value="submit" color="primary">Tìm</Button>
                            </div>
                        </div>
                    </Form>
                </div>
                {staffList}
            </div>
        </div>
    )
}

export default StaffList