import React from 'react'
import { Card, CardTitle, CardText, BreadcrumbItem, Breadcrumb } from 'reactstrap'
import { Link } from 'react-router-dom'



function RenderStaffDepartment({ department, onClick }) {
    return (
        <Card className='departmentinfo'>
            <CardTitle className='departmentname'>{department.name}</CardTitle>
            <CardText className='departmentinfo'>Số lượng nhân viên: {department.numberOfStaff}</CardText>
        </Card>
    )
}


const StaffDepartment = (props) => {
    const staffDepartment = props.departments.map((department) => {
        return (
            <div key={department.id} className="col-lg-4 col-md-6  col-12 department">
                <RenderStaffDepartment department={department} />
            </div>
        )
    })

    return (

        <div className="container">
            <div className="row">
            <Breadcrumb>
               <BreadcrumbItem><Link to='/Staffs'>Nhân Viên</Link></BreadcrumbItem>
               <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
            </Breadcrumb>    
                {staffDepartment}
            </div>

        </div>
    )
}




export default StaffDepartment