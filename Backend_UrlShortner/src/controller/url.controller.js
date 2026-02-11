import { longURL } from "../model/longURL.model.js";
import { nanoid } from "nanoid";
import {
  search_url_code,
  search_by_url,
  create_url,
} from "../service/url.service.js";
import { url_validator } from "../utils/url.validator.js";

// ==============================================================
const shortener_ctrl = async (req, res) => {
  console.log("Hit the backend funcion");

  const { longUrl } = req.body;
  console.log(longUrl);
  const isValidate = await url_validator(longUrl);
  if (!isValidate) {
    return res.status(400).json({ msg: "Invalid URL" });
  }
  // check in DB
  const url_present = await search_by_url(longUrl);
  if (url_present) {
    const short_url = url_present.shortUrl;
    return res.status(200).json({ msg: "Already Avialable", url: short_url });
  }
  const code = nanoid(6);
  const shortUrl = `${process.env.BASE_URL}/${code}`;

  const newUrl = await create_url(longUrl, code, shortUrl);
  console.log("Last of the code ......??????");

  return res.status(200).json({ msg: "hit the api", url: shortUrl });
};
// ==================================================
const click_short_url_ctrl = async (req, res) => {
  console.log("Hello hit there...clicked url");
  const code = req.params.code;
  console.log("The code is......", code);

  const url_present = await search_url_code(code);
  if (!url_present) {
    return res.status(404).json({ msg: "URL not found" });
  }

  const long_url = url_present.longUrl;
  return res.redirect(long_url);
};

export { shortener_ctrl, click_short_url_ctrl };
