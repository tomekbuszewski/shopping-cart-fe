import * as React from "react";
import { connect } from "react-redux";

import { getAllProductsInCart } from "../redux/cart/selectors";
import {
  changeQuantity,
  OPERATION_QTY_PLUS,
  OPERATION_QTY_MINUS,
} from "../redux/cart/actions";

const CartComponent = (props) => {
  return props.items.length > 0 ? (
    <ul>
      {props.items.map(({ item, qty }) => (
        <li key={item.id}>
          {item.name}<br />
          qty: {qty}
          <button
            onClick={() =>
              props.changeQuantity({ id: item.id, operation: OPERATION_QTY_PLUS })
            }
          >
            +
          </button>
          <button
            onClick={() =>
              props.changeQuantity({ id: item.id, operation: OPERATION_QTY_MINUS })
            }
          >
            -
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p>Your cart is empty.</p>
  );
};

const mapState = (store) => ({
  items: getAllProductsInCart(store),
});

const mapDispatch = {
  changeQuantity,
};

export default connect(mapState, mapDispatch)(CartComponent);
