import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
// import { connectDB } from "./models";
// import itemRoutes from "./routes/item.routes";
import db from './models'


dotenv.config();
// connectDB();

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// app.use("/api/items", itemRoutes);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

})