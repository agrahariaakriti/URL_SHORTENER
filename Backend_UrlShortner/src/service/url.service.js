import { longURL } from "../model/longURL.model.js";

export const search_url_code_And_update = async (code) => {
  try {
    const res = await longURL.findOneAndUpdate(
      {
        shortCode: code,
      },
      {
        $push: {
          visitedHistory: { timestamp: Date.now() },
        },
      },
    );
    return res;
  } catch (error) {
    console.log("Error is ---->", error);
  }
};

export const search_by_url = async (longUrl) => {
  try {
    const res = await longURL.findOne({ longUrl });
    return res;
  } catch (error) {
    console.log("Error is ---->", error);
  }
};

export const create_url = async (longUrl, code, shortUrl) => {
  try {
    const new_url = await longURL.create({
      longUrl: longUrl,
      shortCode: code,
      shortUrl: shortUrl,
      visitedHistory: [],
    });
    return new_url;
  } catch (error) {
    console.log("Error is ---->", error);
  }
};

export const search_url_code = async (code) => {
  try {
    const res = await longURL.findOne({
      shortCode: code,
    });
    return res;
  } catch (error) {
    console.log("Error is ---->", error);
  }
};
