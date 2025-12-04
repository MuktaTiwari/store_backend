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

dotenv.config();

const app = express();
app.use(express.json());

sequelize.sync({ alter: true }).then(() => {
  console.log("PostgreSQL DB synced successfully");
});

app.use("/api/products", productRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
