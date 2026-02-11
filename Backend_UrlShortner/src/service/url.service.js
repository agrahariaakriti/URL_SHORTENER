import { create } from "domain";
import { longURL } from "../model/longURL.model.js";

export const search_url_code = async (code) => {
  const res = await longURL.findOne({
    shortCode: code,
  });
  return res;
};

export const search_by_url = async (longUrl) => {
  const res = await longURL.findOne({ longUrl });
  return res;
};

export const create_url = async (longUrl, code, shortUrl) => {
  const new_url = await longURL.create({
    longUrl: longUrl,
    shortCode: code,
    shortUrl: shortUrl,
  });
  return new_url;
};
