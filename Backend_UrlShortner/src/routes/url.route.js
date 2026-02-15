import Route from "express";
import {
  shortener_ctrl,
  shorte_url_analytic,
} from "../controller/url.controller.js";
const urlRoute = Route();

urlRoute.post("/shortener", shortener_ctrl);
urlRoute.get("/analytic/:code", shorte_url_analytic);
export default urlRoute;
