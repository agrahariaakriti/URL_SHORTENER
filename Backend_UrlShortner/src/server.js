import cors from "cors";
import { click_short_url_ctrl } from "./controller/url.controller.js";
import express from "express";
import urlRoute from "./routes/url.route.js";
const app = express();

app.use(
  cors({
    origin: [
      "https://gilded-custard-e12c11.netlify.app",
      "http://localhost:5173",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log("Hit the middleware");
  next();
});
app.use("/api/v1/url", urlRoute);
app.get("/:code", click_short_url_ctrl);
// app.use(/)
export default app;
