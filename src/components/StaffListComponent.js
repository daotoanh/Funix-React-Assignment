import React, { useState } from 'react'
import {
    Card, CardImg, CardTitle, Form, Button, Input,
} from 'reactstrap'

import { Link } from 'react-router-dom'
import NewStaff from './NewStaffComponent'


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

    const handleSreachChange = e => setSearchStaff(e.target.value)

    const handleSubmit = e => {
        let result = props.staffs.filter(staff => { return staff.name.toLowerCase().includes(searchStaff.toLowerCase()) })
        setStaffs(result)
        e.preventDefault()
    }

    

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
                    <NewStaff />
                </div>
                <div className='col-8'>
                    <Form onSubmit={e => handleSubmit(e)}>
                        <div className='row headersearch'>
                            <div className='col-6'>
                                <Input type="text" id="searchname" name="searchname" placeholder="Tên nhân viên..."
                                value={searchStaff}
                                onChange={(e) => handleSreachChange(e)}    />
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