import api from "./api";

const getProducts = (page, limit) => {
  const result = api
    .get(`/products?page=${page}&limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return result;
};

const deleteProduct = (id) => {
  const result = api
    .delete(`/products/${id}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return result;
};

const createProduct = (product) => {
  const result = api
    .post(`/products/`, product)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return result;
};

const updateProduct = (id, product) => {
  const result = api
    .put(`/products/${id}`, product)
    .then((response) => response.data)
    .catch((error) => console.log(error));

  return result;
};

export { getProducts, deleteProduct, createProduct, updateProduct };
