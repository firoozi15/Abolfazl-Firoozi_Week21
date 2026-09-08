import api from "./api";

const getProducts = () => {
  const result = api
    .get("/products?page=1&limit=10")
    .then((response) => response.data)
    // .catch(console.log("error"));

  return result;
};

export { getProducts };
