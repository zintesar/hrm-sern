import dotenv from 'dotenv';
import employees from "./data/employee.js";
import Employee from './models/Employee.js';
import connectDB from './config/db.js'

dotenv.config()



const importData = async () => {
    try {
        await Employee.drop()

        const createdEmployee = await Employee.bulkCreate(employees)

        console.log('Data Imported!')

        process.exit()


    } catch {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {

        await Employee.drop()

        console.log('Data Destroyed!')

        process.exit()

    } catch (error) {

        console.error(`${error}`)
        process.exit(1)
    }
}


if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}