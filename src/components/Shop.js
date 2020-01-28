import * as React from "react";
import { connect } from "react-redux";

import { addToStock } from "../redux/stock/actions";
import { getAllAvailableProducts } from "../redux/stock/selectors";

import { addToCart, removeFromCart } from "../redux/cart/actions";
import { isItemInCart } from "../redux/cart/selectors";

import { fetchData } from "../../__mocks__/stock";

import { CartHolderItem, CartItem, Button, Header } from "../ui";
import Price from "./Price";

const ShopComponent = (props) => {
  const [dataLoaded, setDataLoaded] = React.useState(0);

  React.useEffect(() => {
    // Simulating loading of data
    (async () => {
      try {
        const { data } = await fetchData();
        data.forEach((item) => {
          props.addToStock(item);
        });
        setDataLoaded(1);
      } catch {
        setDataLoaded(2);
      }
    })();
  }, []);

  if (dataLoaded === 0) {
    return <div>Loading...</div>;
  }

  if (dataLoaded === 2) {
    return (
      <div>
        Sorry, we are experiencing technical problems, please check back later.
      </div>
    );
  }

  return (
    <React.Fragment>
      <Header>The Bill Murray Store</Header>
      <CartHolderItem>
        {props.items.map(({ item, qty }) => {
          const isItemInCart = props.isItemInCart(item.id);

          return (
            <CartItem
              large
              key={item.id}
              name={item.name}
              category={item.category}
              img={item.image}
            >
              {qty > 0
                ? !isItemInCart && (
                    <React.Fragment>
                      <Button
                        important
                        onClick={() => props.addToCart(item.id)}
                      >
                        Add to cart
                      </Button>
                      &nbsp;
                      <Price price={item.price} />
                    </React.Fragment>
                  )
                : "Sold out"}
              {isItemInCart && (
                <Button important onClick={() => props.removeFromCart(item.id)}>
                  Remove from cart
                </Button>
              )}
            </CartItem>
          );
        })}
      </CartHolderItem>
    </React.Fragment>
  );
};

const mapState = (store) => ({
  items: getAllAvailableProducts(store),
  isItemInCart: (id) => isItemInCart(store, id),
});

const mapDispatch = {
  addToStock,
  addToCart,
  removeFromCart,
};

export default connect(mapState, mapDispatch)(ShopComponent);
