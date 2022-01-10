import express from 'express'
import { registerEmployee, getEmployees } from '../controllers/employeeController.js'


const router = express.Router()

router.route('/').post(registerEmployee).get(getEmployees)

export default router