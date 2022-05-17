import React from 'react'
import { Card, CardText, Breadcrumb, BreadcrumbItem, CardImg, CardBody, Button } from 'reactstrap'
import dateFormat from 'dateformat'
import { Link } from 'react-router-dom'
import UpdateStaff from './UpdateStaff'


function RenderStaff({staff}) {

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
                                <CardText>Phòng ban: </CardText>
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

    console.log('okie', props)


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
                    <RenderStaff staff={props.staff} departments={props.departments} staffId={props.staffId} />
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