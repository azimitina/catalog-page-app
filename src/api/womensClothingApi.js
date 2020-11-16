import axios from "axios";

const getWomensClothing = (sortBy) => {
  const host = process.env.REACT_APP_BASE_URL;
  return axios.get(
    `${host}/catalog/products?gender=female&page=1&page_size=10&sort=${sortBy}`
  );
};

export { getWomensClothing };
