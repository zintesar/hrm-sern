import React, { useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listEmployees } from '../actions/employeeActions'

const EmployeeListScreen = () => {

    const dispatch = useDispatch()

    const employeeList = useSelector(state => state.employeeList)
    const { loading, error, employees } = employeeList


    useEffect(() => {
        dispatch(listEmployees())
    }, [dispatch])

    return (
        <div>
            <h1>Users</h1>
            {loading ? <Loader></Loader> : error ? <Message variant='danger'>{error}</Message> : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default EmployeeListScreen
