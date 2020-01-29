import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getAllProductsInCart, getCartTotal } from "../redux/cart/selectors";
import { CartHolderItem, CartItem } from "../ui";
import { Price, discountValue, priceOffAfter } from "../components";
import getRandomNumber from "../services/getRandomNumber";

const CheckoutComponent = ({ items, total }) => {
  const hasDiscount = total >= priceOffAfter;
  const totalPrice = hasDiscount ? (total - total * discountValue) : total;

  if (items.length > 0) {
    return (
      <React.Fragment>
        <CartHolderItem>
          {items.map(({ item, qty }) => (
            <CartItem key={item.id} name={item.name}>
              Total: <Price price={item.price} qty={qty} format={false} /><br />
              <small>
                In basket: {qty}, single item price: <Price price={item.price} format={false} />
              </small>
            </CartItem>
          ))}
        </CartHolderItem>
        <hr />
        Total: <Price price={totalPrice} />
        {hasDiscount && <p>(after 10% discount)</p>}
        <p>Invoice #{getRandomNumber(100000, 999999)}</p>
      </React.Fragment>
    );
  }

  return (
    <div>
      Your cart is empty. <Link to="/">Go and buy something</Link>.
    </div>
  );
};

const mapState = (store) => ({
  items: getAllProductsInCart(store),
  total: getCartTotal(store),
});
export const Checkout = connect(mapState)(CheckoutComponent);
