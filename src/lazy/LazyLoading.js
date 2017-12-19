import React from "react";
// import dealyPromise from "./delay-promise";

function withLazyLoading(getComponent, Spinner = null, onError = noop) {
  return class LazyLoadingWrapper extends React.Component {
    state = {
      Component: null
    };

    componentWillMount() {
      const { /*onLoadingStart /*, onLoadingEnd*/ onError } = this.props;
      console.log(this.props);

      // onLoadingStart();

      getComponent()
        .then(esModule => this.setState({ Component: esModule.default }))
        .catch(err => {
          onError(err, this.props);
        });
    }

    render() {
      const { Component } = this.state;

      if (!Component) return Spinner;

      return <Component {...this.props} />;
    }
  };
}

function noop() {}
export default withLazyLoading;
