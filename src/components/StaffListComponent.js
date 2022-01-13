import React, { useState, Component } from 'react'
import {
    Card, CardImg, CardTitle, Form, FormGroup, Button, Input,
    Label, InputGroup, InputGroupText,
    Modal, ModalHeader, ModalBody, FormFeedback} from 'reactstrap'
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

class NewStaff extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.newId,
            name: '',
            doB: '',
            startDate: '',
            salaryScale: '',
            department: { name: 'Sale' },
            annualLeave: '',
            overTime: '',
            salary: '',
            image: '/assets/images/alberto.png',
            isModalOpen: false,
            touched: {
                name: false,
                doB: false,
                startDate: false
            }
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }


    handleDepartmentChange(event) {
        const value = event.target.value
          this.setState({
            department: { ...this.state.department, name: value }
        })
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    }

    handleInputChange(event) {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    onFormSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        this.props.handleaddnewStaff(this.state)
        this.toggleModal()
    }


    validate(name, doB, startDate) {
        const errors = {
            name: '',
            doB: '',
            startDate: ''
        }
        if (this.state.touched.name && name.length < 1)
            errors.name = 'Vui lòng nhập đủ thông tin';

        if (this.state.touched.doB && doB.length < 1)
            errors.doB = 'Vui lòng nhập đủ thông tin';

        if (this.state.touched.startDate && startDate.length < 1)
            errors.startDate = 'Vui lòng nhập đủ thông tin';

        return errors;

    }

    render() {

        const errors = this.validate(this.state.name, this.state.doB, this.state.startDate)

        return (
            <div>
                <InputGroup>
                    <div className='col-5'>
                        <InputGroupText>NHÂN VIÊN</InputGroupText>
                    </div>
                    <Button onClick={this.toggleModal} color="primary">+</Button>
                </InputGroup>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onFormSubmit}>
                            <FormGroup>
                                <Label htmlFor="name">Tên</Label>
                                <Input type="text" id="name" name="name"
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    invalid={errors.name !== ''}
                                    onBlur={this.handleBlur('name')} />
                                <FormFeedback>
                                    {errors.name}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="doB">Ngày sinh</Label>
                                <Input type='date'
                                    onChange={this.handleInputChange}
                                    value={this.state.doB}
                                    dateFormat='dd/MM/yyyy'
                                    name="doB"
                                    invalid={errors.doB !== ''}
                                    onBlur={this.handleBlur('doB')} />
                                <FormFeedback>
                                    {errors.doB}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="startdate">Ngày vào công ty</Label>
                                <Input
                                    type="date"
                                    onChange={this.handleInputChange}
                                    value={this.state.startDate}
                                    dateFormat='dd/MM/yyyy'
                                    placeholderText="dd/mm/yyyy"
                                    name="startDate"
                                    invalid={errors.startDate !== ''}
                                    onBlur={this.handleBlur('startDate')} />
                                <FormFeedback>
                                    {errors.startDate}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="department">Phòng ban</Label>
                                <Input type="select" id="department" name="department"
                                    value={this.state.department.name}
                                    onChange={this.handleDepartmentChange}>
                                    <option>Sale</option>
                                    <option>HR</option>
                                    <option>Marketing</option>
                                    <option>IT</option>
                                    <option>Finance</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="salaryscale">Hệ số lương</Label>
                                <Input type="text" id="salaryscale" name="salaryScale"
                                    value={this.state.salaryScale}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="annualleave">Số ngày nghỉ còn lại</Label>
                                <Input type="number" id="annualleave" name="annualLeave"
                                    value={this.state.annualLeave}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="overtime">Số ngày làm thêm</Label>
                                <Input type="number" id="overtime" name="overTime"
                                    value={this.state.overTime}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Thêm</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
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

    const handleaddnewStaff = (staff) => {
        props.handleaddnewStaff(staff)
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
                    <NewStaff handleaddnewStaff={handleaddnewStaff} newId={props.newId} />
                </div>
                <div className='col-8'>
                    <Form onSubmit={e => handleSubmit(e)}>
                        <div className='row headersearch'>
                            <div className='col-6'>
                                <Input type="text" id="searchname" name="searchname" placeholder="Tên nhân viên..."
                                    value={searchStaff}
                                    onChange={(e) => handleSreachChange(e)} />
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