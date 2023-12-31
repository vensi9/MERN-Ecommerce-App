import exp from "constants";
import express from "express";

const app = express.Router();

// route - /api/v1/user/new
app.post("/new", newUser);

export default app;
