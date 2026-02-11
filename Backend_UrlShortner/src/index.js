import connectDB from "./database/db.js";
import app from "./server.js";
import dotenv from "dotenv";
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server started at 8000 port");
    });
  })
  .catch((err) => {
    console.log("Error while db connection");
  });
