import React from "react";
import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageURL = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  //search for the index where media/ starts, and add its length to get the end index of media/
  const index = url.indexOf(target) + target.length;
  //display the full url up till media/ + cropped + the supposed url after the index
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageURL;
