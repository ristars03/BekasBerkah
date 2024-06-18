import {Sequelize} from "sequelize"

const db = new Sequelize('bekasberkah', 'root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;