import React, { Component } from 'react'
import {
    Card, CardImg, CardTitle, Form, FormGroup, Button, Input,
    Label, InputGroup, InputGroupText,
    Modal, ModalHeader, ModalBody, FormFeedback
} from 'reactstrap'


class NewStaff extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
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
                        <Form >
                            <FormGroup>
                                <Label htmlFor="name">Tên</Label>
                                <Input type="text" id="name" name="name"
                                 />

                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="doB">Ngày sinh</Label>
                                <Input type='date'
                                />                               
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="startdate">Ngày vào công ty</Label>
                                <Input
                                    type="date"
                                    dateFormat='dd/MM/yyyy'
                                    placeholderText="dd/mm/yyyy"
                                    name="startDate"
                                />
                                
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="department">Phòng ban</Label>
                                <Input type="select" id="department" name="department">
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
                                     />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="annualleave">Số ngày nghỉ còn lại</Label>
                                <Input type="number" id="annualleave" name="annualLeave"
                                     />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="overtime">Số ngày làm thêm</Label>
                                <Input type="number" id="overtime" name="overTime"
                                   />
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