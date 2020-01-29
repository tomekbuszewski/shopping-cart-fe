import { createSelector } from "reselect";

const getAllProductsFunction = (store) => {
  const { stock } = store;

  return Object.keys(stock).map((item) => stock[item]);
};

export const getAllProducts = createSelector(getAllProductsFunction, (f) => f);

const getAllAvailableProductsFunction = (store) => {
  return getAllProducts(store).filter((item) => item.qty > 0);
};

export const getAllAvailableProducts = createSelector(
  getAllAvailableProductsFunction,
  (f) => f,
);

const getFilteredProductsFunction = (store, filter) => {
  return getAllProducts(store).sort(filter);
};

export const getFilteredProducts = createSelector(
  getFilteredProductsFunction,
  (f) => f,
);
