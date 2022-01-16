import React from 'react'
import { CardText, CardBody, Card, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'


function RenderStaffSalary({ staff }) {
    if (staff != null) {
        const basicSalary = 300000
        const overTimeSalary = 200000
        
        return (
            <Card className='col-md-12'>
                <div className='row'>
                    <div className='col-s-12 col-md-8 col-lg-9'>
                        <CardBody>
                            <h4>{staff.name}</h4>
                            <CardText>Mã nhân viên: {staff.id}</CardText>
                            <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                            <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
                            <CardText>Lương: {(basicSalary*staff.salaryScale) + (overTimeSalary * staff.overTime)}</CardText>
                        </CardBody>
                    </div>
                </div>
            </Card>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

const StaffSalary = (props) => {

    const staffSalary = props.staffs.map((staff)=>{
        return(
            <div key={staff.id} className="col-lg-4 col-md-6  col-12">
                 <RenderStaffSalary staff={staff} />
            </div>
        )
    })
    return (
        
        <div className="container">
            <div className="row"> 
            <Breadcrumb>
               <BreadcrumbItem><Link to='/staffs'>Nhân viên</Link></BreadcrumbItem>
               <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
            </Breadcrumb>
              {staffSalary}
              </div>
        </div>
    )
 
}
    


export default StaffSalary