import React from 'react'
import { Card, CardText, Breadcrumb, BreadcrumbItem, CardImg, CardBody, Button } from 'reactstrap'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'
import UpdateStaff from './UpdateStaff'
import image from '../assets/images/alberto.png'
import { FadeTransform } from 'react-animation-components'


function RenderStaff(props) {

    if (props.staffs.staffs !== null && props.departments.departments !== null) {
        const Staff = props.staffs.staffs.filter((staff) => {
            return (
                staff.id === Number(props.staffId)
            )
        }).map((staff, index) => {
            const Department = props.departments.departments.find((department) => department.id === staff.departmentId)
            console.log('okie', Department)
            return (
                <FadeTransform in
                    transformProp={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    <Card className='col-md-12' key={index}>
                        <div className='row'>
                            <div className='col-s-12 col-md-4 col-lg-3'>
                                <CardImg src={image} alt={staff.name} style={{ width: "100%" }} />
                            </div>
                            <div className='col-s-12 col-md-8 col-lg-9'>                 
                                    <CardBody>
                                        <h4>Họ và tên: {staff.name}</h4>
                                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                                        <CardText>Phòng ban: {Department.name}</CardText>
                                        <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                                    </CardBody>            
                            </div>
                        </div>
                    </Card>
                </FadeTransform>
            )
        })
        return (
            <div className="container mt-1">
                <div className="row">{Staff}</div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}
const StaffDetail = (props) => {


    const onDeleteStaff = () => {
        props.deleteStaff(props.staffId)
    }



    if (props.staff != null || props.department != null) {
        return (
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/Staffs'>Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <RenderStaff departments={props.departments} staffId={props.staffId} staffs={props.staffs} staff={props.staff} />
                </div>
                <div>
                    <Button
                        variant="danger"
                        className='btndelete'
                        onClick={onDeleteStaff}
                    >
                        Xóa
                    </Button>
                    <UpdateStaff staff={props.staff} updateStaff={props.updateStaff} />
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