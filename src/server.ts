import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/db";
import "./models/categories"
import "./models/products"
import "./models/cart"
import "./models/User"
import "./models/order_items"
import "./models/orders"
import "./models/payments"
import productRouter from "./routes/productRoutes";
import cors from "cors"
import categoryRoutes from "./routes/categoryRoutes"
dotenv.config();

const app = express();

sequelize.sync({ alter: true }).then(() => {
  console.log("PostgreSQL DB synced successfully");
});

app.use(cors({
  origin: 'http://localhost:5173', // Your Vite/React dev server
  credentials: true // If you're using cookies/auth headers
}));
app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/category", categoryRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
