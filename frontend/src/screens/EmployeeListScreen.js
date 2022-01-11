import React, { useState, useEffect } from 'react'
import { Table, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Pagination from '../components/Pagination'
import { listEmployees } from '../actions/employeeActions'





const EmployeeListScreen = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [employeesPerPage, setEmployeesPerPage] = useState(5)



    const dispatch = useDispatch()

    const employeeList = useSelector(state => state.employeeList)
    const { loading, error, employees } = employeeList




    useEffect(() => {
        dispatch(listEmployees())
    }, [dispatch])

    const indexOfLastEmployee = currentPage * employeesPerPage
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage
    const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


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
                        {currentEmployees.map(employee => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <Pagination employeePerPage={employeesPerPage} totalEmployee={employees.length} paginate={paginate} ></Pagination>
        </div>
    )
}

export default EmployeeListScreen
