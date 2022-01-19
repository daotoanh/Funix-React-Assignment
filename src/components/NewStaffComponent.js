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
            department: '',
            annualLeave: '',
            overTime: '',
            salary: '',
            image: '/assets/images/alberto.png',
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
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
        this.props.handleaddnewStaff(this.state)
        this.toggleModal()
    }


    render() {
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
                                    onChange={this.handleInputChange} />

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="doB">Ngày sinh</Label>
                                <Input type='date'
                                    dateFormat='dd/MM/yyyy'
                                    placeholderText="dd/mm/yyyy"
                                    name="doB"
                                    onChange={this.handleInputChange}
                                    value={this.state.doB} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="startdate">Ngày vào công ty</Label>
                                <Input
                                    type="date"
                                    dateFormat='dd/MM/yyyy'
                                    placeholderText="dd/mm/yyyy"
                                    name="startDate"
                                    onChange={this.handleInputChange}
                                    value={this.state.startDate} />

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


export default NewStaff