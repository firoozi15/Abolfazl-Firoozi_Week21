import api from "./api";

const getProducts = (page,limit) => {
  const result = api
    .get(`/products?page=${page}&limit=${limit}`)
    .then((response) => response.data)
    .catch((error => console.log(error)));

  return result;
};

export { getProducts };
