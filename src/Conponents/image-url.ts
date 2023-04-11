import React from "react";

const getCroppedImageURL = (url: string) => {
  const target = "media/";
  //search for the index where media/ starts, and add its length to get the end index of media/
  const index = url.indexOf(target) + target.length;
  //display the full url up till media/ + cropped + the supposed url after the index
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageURL;
