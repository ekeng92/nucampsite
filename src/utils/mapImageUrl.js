import { baseUrl } from "../app/shared/constants";

export const mapImageUrl = (arr) => {
  return arr.map((item) => {
    return {
      ...item,
      image: baseUrl + item.image,
    };
  });
};
