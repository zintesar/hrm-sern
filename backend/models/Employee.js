import Sequelize from 'sequelize'
import db from '../config/db.js'

const Employee = db.define('employee', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    emailAddress: {
        type: Sequelize.STRING
    },
})

export default Employee