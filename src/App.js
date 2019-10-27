import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My data</h1>
        </header>
        <p className="App-intro">Here will be my data</p>
        <p>My name is: {}</p>
      </div>
    );
  }
}
const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user
  };
};
export default connect(mapStateToProps)(App);
