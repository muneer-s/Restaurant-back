import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
// import { connectDB } from "./models";
import itemRoute from "./routes/rest.routes"
import sequelize from "./models";

dotenv.config();
// connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: process.env.FRONTEND, 
    methods: "GET,POST,PUT,DELETE",
};

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


sequelize.authenticate().then(async()=>{
    await sequelize.sync()
    app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
})

app.use("/api", itemRoute);

