import Route from "express";
import { shortener_ctrl } from "../controller/url.controller.js";
const urlRoute = Route();

urlRoute.post("/shortener", shortener_ctrl);
export default urlRoute;
