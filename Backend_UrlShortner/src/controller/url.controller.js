import { nanoid } from "nanoid";
import {
  search_url_code,
  search_by_url,
  create_url,
  search_url_code_And_update,
} from "../service/url.service.js";
import { url_validator } from "../utils/url.validator.js";

// ==============================================================
//
// ==============================================================

const shortener_ctrl = async (req, res) => {
  const { longUrl } = req.body;
  console.log(longUrl);
  const isValidate = url_validator(longUrl);
  console.log("AAKRITI ------------------>", isValidate);

  if (!isValidate) {
    return res.status(400).json({ msg: "INVALID URL" });
  }
  // check in DB
  const url_present = await search_by_url(longUrl);
  if (url_present) {
    const short_url = url_present.shortUrl;
    return res.status(200).json({ msg: "SUCCESSFULL", url: short_url });
  }
  const code = nanoid(6);
  const shortUrl = `${process.env.BASE_URL}/${code}`;

  const newUrl = await create_url(longUrl, code, shortUrl);

  return res
    .status(200)
    .json({
      msg: "SUCCESSFULL",
      short_url: shortUrl,
      code: process.env.BASE_URL,
    });
};
// ==============================================================
//
// ==============================================================
const click_short_url_ctrl = async (req, res) => {
  const code = req.params.code;

  const url_present = await search_url_code_And_update(code);
  if (!url_present) {
    return res.status(404).json({ msg: "URL NOT FOUND" });
  }

  const long_url = url_present.longUrl;

  return res.redirect(long_url);
};
// ==============================================================
//
// ==============================================================

const shorte_url_analytic = async (req, res) => {
  const code = req.params.code;
  if (!code) {
    return res.status(400).json({ message: "SHORT URL REQUIRED" });
  }
  const curr_url = await search_url_code(code);

  if (!curr_url) {
    return res.status(400).json({ message: "URL NOT FOUND" });
  }
  const no_of_click = curr_url.visitedHistory.length;

  return res.status(200).json({ message: "SUCCESSFULL", data: no_of_click });
};
export { shortener_ctrl, click_short_url_ctrl, shorte_url_analytic };
