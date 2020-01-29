import * as React from "react";
import { connect } from "react-redux";

import { getAllProductsInCart, getCartTotal } from "../redux/cart/selectors";
import {
  changeQuantity,
  OPERATION_QTY_PLUS,
  OPERATION_QTY_MINUS,
} from "../redux/cart/actions";

import { Cart as View, Header, CartItem, CartHolderItem, Button } from "../ui";
import { Price } from "./";

const CartComponent = (props) => {
  const priceOffAfter = 50;
  const discountValue = 0.01;
  const [active, setActive] = React.useState(false);
  const [total, setTotal] = React.useState(props.total);

  React.useEffect(() => {
    const newTotal =
      props.total >= priceOffAfter
        ? props.total - props.total * discountValue
        : props.total;
    setTotal(newTotal);
  });

  return (
    <View active={active} setter={() => setActive(!active)}>
      <Header as="h3">Your cart</Header>
      {props.items.length > 0 ? (
        <React.Fragment>
          <CartHolderItem>
            {props.items.map(({ item, qty }) => (
              <CartItem key={item.id} name={item.name}>
                <Price price={item.price} />
                <br />
                In cart: {qty}
                <br />
                <Button
                  small
                  rounded
                  accent
                  onClick={() =>
                    props.changeQuantity({
                      id: item.id,
                      operation: OPERATION_QTY_PLUS,
                    })
                  }
                >
                  +
                </Button>
                <Button
                  small
                  rounded
                  accent
                  onClick={() =>
                    props.changeQuantity({
                      id: item.id,
                      operation: OPERATION_QTY_MINUS,
                    })
                  }
                >
                  -
                </Button>
              </CartItem>
            ))}
          </CartHolderItem>
          Total: <Price price={total} />
          {props.total >= priceOffAfter && <p>You're getting 10% discount!</p>}
          <div style={{ marginTop: "auto" }}>
            <Button full important>
              Go to checkout
            </Button>
          </div>
        </React.Fragment>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </View>
  );
};

const mapState = (store) => ({
  items: getAllProductsInCart(store),
  total: getCartTotal(store),
});

const mapDispatch = {
  changeQuantity,
};

export const Cart = connect(mapState, mapDispatch)(CartComponent);
