import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRouter from "./routes/userRoutes";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

dotenv.config();
connectDB();

const app: Application = express();

// Body parser
app.use(express.json());

// Routes
app.use("/api/users", userRouter);

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});
// User → Orders
User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

// Orders → Order Items
Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

// Products → Order Items
Product.hasMany(OrderItem, { foreignKey: "product_id" });
OrderItem.belongsTo(Product, { foreignKey: "product_id" });

// Order → Payment
Order.hasOne(Payment, { foreignKey: "order_id" });
Payment.belongsTo(Order, { foreignKey: "order_id" });

// User → Cart
User.hasMany(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

// Product → Cart
Product.hasMany(Cart, { foreignKey: "product_id" });
Cart.belongsTo(Product, { foreignKey: "product_id" });

// Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
