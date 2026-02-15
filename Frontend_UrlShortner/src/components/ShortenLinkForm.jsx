import React, { useState } from "react";
import axios from "axios";

const ShortenLinkForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [noClick, setNoClick] = useState(0);

  const getClickCount = async (e, shortUrl) => {
    e.preventDefault();

    const code = shortUrl.split("/").pop();
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/v1/url/analytic/${code}`,
    );
    setNoClick(res.data.data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/url/shortener`,
        { longUrl: url },
      );

      setShortUrl(res.data.url);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="md:w-1/2 flex flex-col items-start bg-gray-100 p-6 mx-6 rounded-lg shadow-md">
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
        <div className="w-full flex justify-center mt-8">
          <div
            className="
        w-full max-w-4xl
        flex flex-col
        md:flex-row
        gap-4
        items-stretch
        justify-center
      "
          >
            {/* LEFT BOX */}
            <div className="flex-1 bg-white p-4 rounded shadow border flex items-center justify-between">
              <span className="break-all text-sm">{shortUrl}</span>

              <a
                href={shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Go
              </a>
            </div>

            {/* RIGHT BOX */}
            <div className="flex-1 bg-white p-4 rounded shadow border flex items-center justify-between">
              <div className="text-lg font-semibold">Clicks: {noClick}</div>

              <button
                type="button"
                onClick={(e) => getClickCount(e, shortUrl)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortenLinkForm;
