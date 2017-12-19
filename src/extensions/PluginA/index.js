import React from "react";
import withLazyLoading from "./../../lazy/LazyLoading";
import delayPromise from "./../../lazy/delay-promise";
const delay5K = delayPromise(5000);

const Loading = props => {
  if (props.error) {
    return <div>Error!</div>;
  } else {
    return <div>Loading...</div>;
  }
};

export default withLazyLoading(
  () => delay5K(import(/* webpackChunkName: "PluginALazyLoad" */ "./PluginA")),
  <Loading type="spinner" />
);
