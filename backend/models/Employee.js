import Sequelize from 'sequelize'
import db from '../config/db.js'

const Employee = db.define('employee', {
    // id: {
    //     type: Sequelize.INTEGER, allowNull: false, primaryKey: true
    // },
    firstName: {
        type: Sequelize.STRING, allowNull: false
    },
    lastName: {
        type: Sequelize.STRING, allowNull: false
    },
    email: {
        type: Sequelize.STRING, allowNull: false
    },
});

(async () => {
    await db.sync()
})();


export default Employee