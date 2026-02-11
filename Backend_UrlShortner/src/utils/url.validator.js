export const url_validator=(url)=>{
    const urlRegex =
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/\S*)?$/;
  
    const isValidUrl = urlRegex.test(url);
    return isValidUrl;
  
}