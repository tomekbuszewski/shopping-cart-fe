import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAllProductsInCart } from "../redux/cart/selectors";

const CheckoutComponent = ({ items }) => {
  console.log(items);

  if (items.length > 0) {
    return <div>Hello from Checkout</div>;
  }

  return (
    <div>
      Your cart is empty. <Link to="/">Go and buy something</Link>.
    </div>
  );
};

const mapState = (store) => ({
  items: getAllProductsInCart(store),
});
export const Checkout = connect(mapState)(CheckoutComponent);
