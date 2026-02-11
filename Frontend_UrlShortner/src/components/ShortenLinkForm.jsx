import React, { useState } from "react";
import axios from "axios";

const ShortenLinkForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/url/shortener`,
        { longUrl: url },
      );
      console.log("Hyy here is short url:", res.data.url);
      setShortUrl(res.data.url);
    } catch (err) {
      console.error(err);
      alert("Failed to shorten URL");
    }
  };

  return (
    <div className="md:w-1/2 flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-md">
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Paste your URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          className="w-full p-3 mb-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
        >
          Shorten Link
        </button>
      </form>

      {shortUrl && (
        <div className="mt-4 w-full flex flex-col sm:flex-row sm:justify-between items-start sm:items-center bg-white p-3 rounded border border-gray-300">
          <span className="break-all">{shortUrl}</span>
          <a
            href={shortUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 sm:mt-0 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Go
          </a>
        </div>
      )}
    </div>
  );
};

export default ShortenLinkForm;
