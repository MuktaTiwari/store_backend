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

// Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
