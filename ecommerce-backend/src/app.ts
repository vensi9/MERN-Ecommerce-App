import express from 'express'


// Importing routes
import userRoute from "./routes/user.js"

const port = 4000;

const app = express();

// Using route
app.use("/api/v1/user", userRoute);


app.listen(port, () => {
    console.log(`Server is working on https://localhost:${port}`)
});