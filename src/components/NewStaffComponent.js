import React, { Component } from 'react'
import {
    Form, FormGroup, Button, Input,
    Label, InputGroup, InputGroupText,
    Modal, ModalHeader, ModalBody, FormFeedback
} from 'reactstrap'


class NewStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
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
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        })
    }

    handleDepartmentChange(event) {
        const value = event.target.value
        this.setState({
            department: { ...this.state.department, name: value }
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

    onFormSubmit(event) {
        event.preventDefault()
        this.props.postStaff(this.state.id, this.state.name, this.state.doB, this.state.startDate, this.state.salaryScale, this.state.department, this.state.annualLeave, this.state.overTime)
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
        
        if (this.state.touched.name && name.length > 30 )
            errors.name = 'Yêu cầu nhập dưới 30 ký tự';

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
                        <Form onSubmit={this.onFormSubmit} >
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
                                    dateFormat='dd/MM/yyyy'
                                    placeholder="dd/mm/yyyy"
                                    name="doB"
                                    onChange={this.handleInputChange}
                                    value={this.state.doB}
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
                                    dateFormat='dd/MM/yyyy'
                                    placeholder="dd/mm/yyyy"
                                    name="startDate"
                                    onChange={this.handleInputChange}
                                    value={this.state.startDate}
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
                                <Input type="number" id="salaryscale" name="salaryScale"
                                    placeholder='0.5 -> 3'
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


export default NewStaff