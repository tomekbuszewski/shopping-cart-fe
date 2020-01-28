import { createSelector } from "reselect";

const getAllProductsFunction = (store) => {
  const { stock } = store;

  return Object.keys(stock).map((item) => stock[item]);
};

export const getAllProducts = createSelector(getAllProductsFunction, (f) => f);

const getAllAvailableProductsFunction = (store) => {
  const { stock } = store;

  return getAllProducts(stock).filter((item) => item.qty > 0);
};

export const getAllAvailableProducts = createSelector(
  getAllAvailableProductsFunction,
  (f) => f,
);
