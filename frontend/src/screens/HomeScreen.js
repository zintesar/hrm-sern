import React from 'react'
import { Col, Row } from 'react-bootstrap'
import EmployeeListScreen from './EmployeeListScreen'
import AddEmployeeScreen from './AddEmployeeScreen'

const HomeScreen = () => {
    return (
        <div>
            <h1>test</h1>
            <Row>
                <Col md={5}>
                    <AddEmployeeScreen></AddEmployeeScreen>
                </Col>
                <Col md={7}>
                    <EmployeeListScreen></EmployeeListScreen>
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen
