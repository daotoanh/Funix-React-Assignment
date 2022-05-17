import React, { Component } from 'react'
import { Control, LocalForm, Errors } from 'react-redux-form';
import {
    Button, 
    Modal, ModalHeader, ModalBody, Row, Col, Label
} from 'reactstrap'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));


class UpdateStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        

        this.toggleModal = this.toggleModal.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    onFormSubmit(values) {
        const newValues = {
            id: values.id,
            name: values.name,
            doB: values.doB,
            startDate: values.startDate,
            departmentId: values.department,
            annualLeave: values.annualLeave,
            overTime: values.overTime,
          }
        this.props.updateStaff(newValues)
        this.toggleModal()
    }

    render() {
        return (
            <div>
                <Button
                    color="primary"
                    className='btnedit'
                    onClick={this.toggleModal}
                >
                    Sửa
                </Button>
                <div>
                      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader>
                          <h1>Sửa Thông Tin Nhân Viên</h1>
                        </ModalHeader>
                        <ModalBody>
                          <LocalForm
                            onSubmit={(values) => this.onFormSubmit(values)}
                          >
                            <Row className="mb-3">
                              <Label htmlFor="id" column sm="3">
                                Mã Nhân viên
                              </Label>
                              <Col sm="9">
                                <Control.text
                                  model=".id"
                                  id="id"
                                  name="id"
                                  className="form-control"
                                  defaultValue={this.props.staff.id}
                                  disabled
                                />
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <Label htmlFor="name" column sm="3">
                                Tên
                              </Label>
                              <Col sm="9">
                                <Control.text
                                  model=".name" // must be .name to collect data
                                  id="name"
                                  defaultValue={this.props.staff.name}
                                  name="name"
                                  className="form-control"
                                  updateOn={"change"} //OnChange event
                                  validators={{
                                    minLength: minLength(3),
                                    maxLength: maxLength(20),
                                  }}
                                />
                                <Errors
                                  className="text-danger"
                                  model=".name"
                                  show="touched"
                                  name="name"
                                  messages={{
                                    minLength:
                                      "* Trường này phải lớn hơn 3 ký tự",
                                    maxLength:
                                      "* Trường này phải nhỏ hơn 20 ký tự",
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <Label htmlFor="doB" column sm="3">
                                Ngày sinh
                              </Label>
                              <Col sm="9">
                                <Control.text
                                  type="text"
                                  model=".doB"
                                  id="doB"
                                  name="doB"
                                  className="form-control"
                                  updateOn={"change"}
                                  defaultValue={this.props.staff.doB && this.props.staff.doB.slice(0,10)}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <Label htmlFor="startDate" column sm="3">
                                Ngày Vào Công ty
                              </Label>
                              <Col sm="9">
                                <Control.text
                                  type="text"
                                  model=".startDate"
                                  id="startDate"
                                  name="startDate"
                                  className="form-control"
                                  updateOn={"change"}
                                  defaultValue={
                                    this.props.staff.startDate &&  this.props.staff.startDate.slice(0,10)
                                  }
                                />
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <Label htmlFor="department" column sm="3">
                                Phòng Ban
                              </Label>
                              <Col sm="9">
                                <Control.select
                                  defaultValue={this.props.staff.departmentId}
                                  updateOn={"change"}
                                  model=".department"
                                  id="department"
                                  name="department"
                                  className="form-control"
                                  aria-label="Default select example"
                                  >
                                  <option>Chọn Phòng Ban</option>
                                  <option value="Dept01">Sale</option>
                                  <option value="Dept02">HR</option>
                                  <option value="Dept03">Marketing</option>
                                  <option value="Dept04">IT</option>
                                  <option value="Dept05">Finance</option>
                                  </Control.select>
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <Label htmlFor="annualLeave" column sm="3">
                                Số Ngày Nghỉ Còn Lại
                              </Label>
                              <Col sm="9">
                                <Control.text
                                  model=".annualLeave"
                                  defaultValue={this.props.staff.annualLeave}
                                  id="annualLeave"
                                  name="annualLeave"
                                  className="form-control"
                                  updateOn={"change"}
                                  validators={{ isNumber }}
                                />
                                <Errors
                                  className="text-danger"
                                  model=".annualLeave"
                                  show="touched"
                                  messages={{
                                    isNumber: "* Trường này phải là số",
                                  }}
                                />
                              </Col>
                            </Row>
                            <Row className="mb-3">
                              <Label htmlFor="overTime" column sm="3">
                                Số Ngày Đã Làm Thêm
                              </Label>
                              <Col sm="9">
                                <Control.text
                                  model=".overTime"
                                  defaultValue={this.props.staff.overTime}
                                  id="overTime"
                                  name="overTime"
                                  className="form-control"
                                  updateOn={"change"}
                                  validators={{ isNumber }}
                                />
                                <Errors
                                  className="text-danger"
                                  model=".overTime"
                                  show="touched"
                                  messages={{
                                    isNumber: "* Trường này phải là số",
                                  }}
                                />
                              </Col>
                            </Row>
                            <Button variant="primary" type="submit">
                              Sửa Thông Tin Nhân viên
                            </Button>
                          </LocalForm>
                        </ModalBody>
                      </Modal>
                    </div>
            </div>
        )
    }

}

export default UpdateStaff