import mysql from 'mysql2/promise'

const database = 'mydb'
const host = 'localhost'
const port = '3306'
const user = 'root'
const password = ''

const createDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: host,
            port: port,
            user: user,
            password: password
        })
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);

        console.log('Database Created')

        process.exit()


    } catch {
        console.error(`${error}`)
        process.exit(1)
    }
}

createDB()