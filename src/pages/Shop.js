import * as React from "react";
import { connect } from "react-redux";

import { addToStock } from "../redux/stock/actions";
import {
  getAllAvailableProducts,
  getFilteredProducts,
} from "../redux/stock/selectors";

import { addToCart, removeFromCart } from "../redux/cart/actions";
import { isItemInCart } from "../redux/cart/selectors";

import { fetchData } from "../../__mocks__/stock";

import { CartHolderItem, CartItem, Button, Error } from "../ui";
import { Price, Cart } from "../components";

const possibleFilters = {
  priceAsc: (a, b) => {
    if (a.item.price > b.item.price) {
      return 1;
    } else if (a.item.price < b.item.price) {
      return -1;
    } else {
      return 0;
    }
  },
  nameAsc: (a, b) => {
    if (a.item.name > b.item.name) {
      return 1;
    } else if (a.item.name < b.item.name) {
      return -1;
    } else {
      return 0;
    }
  },
};

const ShopComponent = (props) => {
  const [dataLoaded, setDataLoaded] = React.useState(0);
  const [filter, setFilter] = React.useState(null);

  const items =
    filter === null
      ? props.items
      : props.filteredItems(possibleFilters[filter]);

  React.useEffect(() => {
    // Simulating loading of data
    (async () => {
      try {
        const { data } = await fetchData(
          window.location.hash === "#showUIError",
        );
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
      <Error>
        Sorry, we are experiencing technical problems, please check back later.
      </Error>
    );
  }

  return (
    <React.Fragment>
      <Cart />
      <p>
        <select
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option defaultChecked>Sort by</option>
          <option value="priceAsc">Price, ascending</option>
          <option value="nameAsc">Name, ascending</option>
        </select>
      </p>
      <CartHolderItem>
        {items.map(({ item, qty }) => {
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
  filteredItems: (filter) => getFilteredProducts(store, filter),
});

const mapDispatch = {
  addToStock,
  addToCart,
  removeFromCart,
};

export const Shop = connect(mapState, mapDispatch)(ShopComponent);
