export const url_validator = (url) => {
  const urlRegex =
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/;
  const dataUrl = /^data:image\/[a-zA-Z]+;base64,[A-Za-z0-9+/=]+$/;
  const isValidUrl = urlRegex.test(url) || dataUrl.test(url);
  return isValidUrl;
};
