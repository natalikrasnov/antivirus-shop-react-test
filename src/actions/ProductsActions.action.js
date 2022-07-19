export const addProductAction = (product) => ({
  type: "ADD_PRODUCT",
  product,
});

export const setProductsAction = (products) => ({
  type: "SET_PRODUCTS",
  products,
});

export const searchProductsAction = (filter) => ({
  type: "SEARCH_PRODUCTS",
  filter,
});
