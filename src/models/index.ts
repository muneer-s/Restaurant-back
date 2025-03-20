import sequelize from "../config/database";
import Item from "./item.model";

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to PostgreSQL");
    await sequelize.sync({ alter: true }); // Update tables if needed
    console.log("Database synced");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export { connectDB, Item };
