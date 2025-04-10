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
const PORT = process.env.PORT || 3004;

// const corsOptions = {
//     origin: process.env.FRONTEND, 
//     methods: "GET,POST,PUT,DELETE",
// };

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


sequelize.authenticate().then(async()=>{
    await sequelize.sync()
    app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
})

app.use("/api", itemRoute);

app.use((err:any, req:any, res:any, next:any) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });

  const startServer = async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connected successfully');
      
      // Only sync in development
      if (process.env.NODE_ENV !== 'production') {
        await sequelize.sync({ alter: true });
      }
      
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      process.exit(1);
    }
  };
  
  startServer();