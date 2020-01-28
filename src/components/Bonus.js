import * as React from "react";

const Bonus = props => {
  if (props.value >= props.reduction) {
    return <span>{props.children} (with -{props.reduction})</span>
  }

  return <span>{props.children}</span>
};

Bonus.defaultProps = {
  reduction: 0.01,
};
