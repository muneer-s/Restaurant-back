import { Sequelize,Options } from "sequelize";
import dotenv from "dotenv";



dotenv.config();

const options:Options = {
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    // port:process.env.DB_PORT as unknown as number,
    port: Number(process.env.DB_PORT),
    dialect:"postgres",
    host:process.env.DB_HOST,
    sync:{alter:true,logging:true},  // ith production timil maattum 
    logging:true
}

const sequelize = new Sequelize(options)

export default sequelize