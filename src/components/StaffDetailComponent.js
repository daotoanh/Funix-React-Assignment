import React from 'react'
import { Card, CardText, Breadcrumb, BreadcrumbItem, CardImg, CardBody } from 'reactstrap'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'


function RenderStaff({ staff }) {
    if (staff != null) {
        return (
            <Card className='col-md-12'>
                <div className='row'>
                    <div className='col-s-12 col-md-4 col-lg-3'>
                        <CardImg src={staff.image} alt={staff.name} style={{ width: "100%" }} />
                    </div>
                    <div className='col-s-12 col-md-8 col-lg-9'>
                        <CardBody>
                            <h4>Họ và tên: {staff.name}</h4>
                            <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                            <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                            <CardText>Phòng ban: {staff.departmentId}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
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
const StaffDetail = (props) => {
    console.log(props)

    if (props.staff != null || props.department != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/Staffs'>Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <RenderStaff staff={props.staff} />
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}



export default StaffDetail