import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ModuleB from "./extensions/PluginB";
import LazyA from "./extensions/PluginA";

class App extends Component {
  render() {
    const B = ModuleB.dependencies({ routing: "routingDep" });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <em>Content</em>
        </p>
        <B name="Plugin B" description="A pluggable extension named B" />
        {
          //<A name="Plugin A" description="A lazy pluggable extension named A" />
        }
        <LazyA
          name="Plugin Lazy A"
          description="A lazy loaded pluggable extension named A"
        />
      </div>
    );
  }
}

export default App;
