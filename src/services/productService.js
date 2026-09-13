import api from "./api";

const getProducts = (page, limit, search) => {
  const result = api
    .get(`/products?page=${page}&limit=${limit}&search=${search}`)
    .then((response) => response.data);

  return result;
};

const deleteProduct = (id) => {
  const result = api
    .delete(`/products/${id}`)
    .then((response) => response.data);

  return result;
};

const createProduct = (product) => {
  const result = api
    .post(`/products/`, product)
    .then((response) => response.data);

  return result;
};

const updateProduct = (id, product) => {
  const result = api
    .put(`/products/${id}`, product)
    .then((response) => response.data);

  return result;
};

export { getProducts, deleteProduct, createProduct, updateProduct };
