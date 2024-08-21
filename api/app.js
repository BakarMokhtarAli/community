import express from "express";
import AppError from "./utils/AppError.js";
import globalErrorHandler from "./controllers/errorController.js";

const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.use("*", (req, res, next) => {
  const message = `Page not found. The requested URL ${req.originalUrl} was not found.`;
  next(new AppError(message, 404));
});
app.use(globalErrorHandler);
export default app;
