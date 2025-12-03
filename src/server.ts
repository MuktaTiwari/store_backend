import express, { Application } from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";
import { errorHandler, notFound } from "./middleware/errorMiddleware";

dotenv.config();

const app: Application = express();

// You can also sync tables:
// sequelize.sync();

app.use(express.json());

// Routes
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
