import * as React from "react";
import { Price as View } from "../ui";

// Solution taken from https://blog.abelotech.com/posts/number-currency-formatting-javascript/
export const Price = (props) => {
  const value = `$${(props.price * props.qty)
    .toFixed(2)
    .replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, "$1,")}`;

  if (props.format) {
    return <View>{value}</View>;
  }

  return value;
};

Price.defaultProps = {
  qty: 1,
  format: true,
};
