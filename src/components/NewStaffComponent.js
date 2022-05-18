import React, { Component } from 'react'
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, InputGroup, InputGroupText,
    Modal, ModalHeader, ModalBody, Row, Col, FormGroup, Label, Input
} from 'reactstrap'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));



class NewStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        console.log('okie', props)

        this.toggleModal = this.toggleModal.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    onFormSubmit(values) {   
        this.props.postStaff(this.props.id, values.name, values.salaryScale, values.doB, values.startDate, values.department, values.annualLeave, values.overTime, values.salary)
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

                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
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
                </Modal> */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm nhân viên</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.onFormSubmit(values)}>
                            <Row className="mb-3">
                                <Label htmlFor='name' column sm="3">
                                    Tên
                                </Label>
                                <Col sm="9">
                                    <Control.text
                                        placeholder="Tên Nhân Viên"
                                        model='.name'//
                                        id='name'
                                        name='name'
                                        className='form-control'
                                        updateOn={'change'}
                                        validators={
                                            {
                                                required, minLength: minLength(3), maxLength: maxLength(20)
                                            }
                                        }
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.name'
                                        show='touched'
                                        name='name'
                                        messages={{
                                            required: '* Trường này không được trống',
                                            minLength: '* Trường này phải lớn hơn 3 ký tự',
                                            maxLength: '* Trường này phải nhỏ hơn 20 ký tự',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Label htmlFor='salaryScale' column sm="3">
                                    Hệ số Lương
                                </Label>
                                <Col sm="9">
                                    <Control.text
                                        placeholder="Hệ số Lương"
                                        model='.salaryScale'
                                        id='salaryScale'
                                        name='salaryScale'
                                        className='form-control'
                                        updateOn={'change'}
                                        validators={
                                            {
                                                required, isNumber
                                            }
                                        }
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.salaryScale'
                                        show='touched'
                                        name='salaryScale'
                                        messages={{
                                            required: '* Trường này không được trống',
                                            isNumber: '* Trường này phải là số'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Label htmlFor='doB' column sm="3">
                                    Ngày sinh
                                </Label>
                                <Col sm="9">
                                    <Control.text
                                        placeholder="Ngày sinh"
                                        type='date'
                                        model='.doB'
                                        id='doB'
                                        name='doB'
                                        className='form-control'
                                        updateOn={'change'}
                                        validators={{ required }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.doB'
                                        show='touched'
                                        messages={{
                                            required: '* Trường này không được trống',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Label htmlFor='startDate' column sm="3">
                                    Ngày Vào Công ty
                                </Label>
                                <Col sm="9">
                                    <Control.text
                                        placeholder="Ngày Vào Công ty"
                                        type='date'
                                        model='.startDate'
                                        id='startDate'
                                        name='startDate'
                                        className='form-control'
                                        updateOn={'change'}
                                        validators={{ required }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.startDate'
                                        show='touched'
                                        messages={{
                                            required: '* Trường này không được trống',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Label htmlFor='department' column sm="3">
                                    Phòng Ban
                                </Label>
                                <Col sm="9">
                                    <Control.select
                                        placeholder='Phòng Ban'
                                        updateOn={'change'}
                                        model='.department'
                                        id='department'
                                        name='department'
                                        className='form-control'
                                        aria-label="Default select example"
                                        validators={{ required }}
                                    >
                                        <option>Chọn Phòng Ban</option>
                                        <option value="Dept01">Sale</option>
                                        <option value="Dept02">HR</option>
                                        <option value="Dept03">Marketing</option>
                                        <option value="Dept04">IT</option>
                                        <option value="Dept05">Finance</option>
                                    </Control.select>
                                    <Errors
                                        className='text-danger'
                                        model='.department'
                                        show='touched'
                                        messages={{
                                            required: '* Trường này không được trống',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Label htmlFor='annualLeave' column sm="3">
                                    Số Ngày Nghỉ Còn Lại
                                </Label>
                                <Col sm="9">
                                    <Control.text
                                        model='.annualLeave'
                                        id='annualLeave'
                                        name='annualLeave'
                                        className='form-control'
                                        updateOn={'change'}
                                        placeholder='Số Ngày Nghỉ Còn Lại'
                                        validators={{ required, isNumber }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.annualLeave'
                                        show='touched'
                                        messages={{
                                            required: '* Trường này không được trống',
                                            isNumber: '* Trường này phải là số',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Label htmlFor='overTime' column sm="3">
                                    Số Ngày Đã Làm Thêm
                                </Label>
                                <Col sm="9">
                                    <Control.text
                                        model='.overTime'
                                        id='overTime'
                                        name='overTime'
                                        className='form-control'
                                        updateOn={'change'}
                                        placeholder='Số Ngày Đã Làm Thêm'
                                        validators={{ required, isNumber }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.overTime'
                                        show='touched'
                                        messages={{
                                            required: '* Trường này không được trống',
                                            isNumber: '* Trường này phải là số',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Label htmlFor='salary' column sm="3">
                                    Lương
                                </Label>
                                <Col sm="9">
                                    <Control.text
                                        model='.salary'
                                        id='salary'
                                        name='salary'
                                        className='form-control'
                                        updateOn={'change'}
                                        placeholder='Lương'
                                        validators={{ required, isNumber }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model='.salary'
                                        show='touched'
                                        messages={{
                                            required: '* Trường này không được trống',
                                            isNumber: '* Trường này phải là số',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Thêm</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default NewStaff