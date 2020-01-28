import * as React from "react";
import { connect } from "react-redux";
import { isItemInCart } from "../redux/cart/selectors";

import { addToStock } from "../redux/stock/actions";
import { getAllAvailableProducts } from "../redux/stock/selectors";

import { addToCart, removeFromCart } from "../redux/cart/actions";

import { fetchData } from "../../__mocks__/stock";

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
    <ul>
      {props.items.map(({ item, qty }) => {
        const isItemInCart = props.isItemInCart(item.id);

        return (
          <li key={item.id}>
            {item.name}
            {qty > 0
              ? !isItemInCart && (
                  <button onClick={() => props.addToCart(item.id)}>
                    Add to cart
                  </button>
                )
              : "Sold out"}
            {isItemInCart && (
              <button onClick={() => props.removeFromCart(item.id)}>
                Remove from cart
              </button>
            )}
          </li>
        );
      })}
    </ul>
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
