import { Link } from 'react-router-dom';
import { Card, CardText, CardTitle, CardImg, CardBody } from 'reactstrap'



function DepartmentDetail(props) {
    const clickDepartments = props.staffs.staffs.filter(clickDepartment => {
        return (clickDepartment.departmentId === props.departId)
    }).map((clickDepartmentDetail, index) => {
        return (
            <div key={index} className='col-sm-12 col-md-6 col-lg-3 mt-3'>
                <Card>
                    <div>
                        <CardImg width='100%' src={clickDepartmentDetail.image} alt={clickDepartmentDetail.name} />
                        <CardTitle className="fs-3 text-center">{clickDepartmentDetail.name}</CardTitle>
                    </div>
                </Card>
            </div>
        )
    })
    return (
        <div className='container mt-3'>
            <div className='row'>
                <Link to='/department'>Phòng Ban</Link>
                {clickDepartments}
            </div>
        </div>
    )
}


export default DepartmentDetail;