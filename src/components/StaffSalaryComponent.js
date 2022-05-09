import React from 'react'
import { CardText, CardBody, Card, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'


function RenderStaffSalary({ staffsalary }) {
    if (staffsalary != null) {
        const basicSalary = 300000
        const overTimeSalary = 200000
        
        return (
            <Card className='col-md-12'>
                <div className='row'>
                    <div className='col-s-12 col-md-8 col-lg-9 salarystaff'>
                        <CardBody>
                            <h4>{staffsalary.name}</h4>
                            <CardText>Mã nhân viên: {staffsalary.id}</CardText>
                            <CardText>Hệ số lương: {staffsalary.salaryScale}</CardText>
                            <CardText>Số giờ làm thêm: {staffsalary.overTime}</CardText>
                            <CardText>Lương: {(basicSalary*staffsalary.salaryScale) + (overTimeSalary * staffsalary.overTime)} <i class="fa fa-usd" aria-hidden="true"></i></CardText>
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
    console.log(props)
    const staffSalary = props.staffssalary.staffssalary.map((staffsalary)=>{
        return(
            <div key={staffsalary.id} className="col-lg-4 col-md-6  col-12">
                 <RenderStaffSalary staffsalary={staffsalary} />
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