import asyncHandler from 'express-async-handler'
import db from '../config/db.js'
import Employee from '../models/Employee.js'

// @desc    Fetch all employees
// @route   GET /api/employees/
// @access  Public

const getEmployees = asyncHandler(async (req, res) => {
    const employees = await Employees.
        res.send(201)
})



// @desc    Register a new employee
// @route   POST /api/employees/
// @access  Public



const registerEmployee = asyncHandler(async (req, res) => {

    // const { firstName, lastName, email } = req.body

    const employeeExists = await Employee.findOne({ where: { email: email } })

    if (employeeExists !== null) {
        res.status(400)
        throw new Error('Employee already exists')
    }

    const employee = await Employee.create({
        firstName,
        lastName,
        email
    })

    if (employee) {
        res.status(201).json({
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email
        })

    } else {
        res.status(404)
        throw new Error('Invalid user data')
    }
})


export { registerEmployee, getEmployees }