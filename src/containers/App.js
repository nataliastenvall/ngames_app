import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import "./App.css";

class App extends Component {
  render() {
    const { user, page } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My data</h1>
        </header>
        <p className="App-intro">Here will be my data</p>
        <p>My name is: {user.name}</p>
        <p>
          I have {page.photos.length} photos of {page.year}
        </p>
      </div>
    );
  }
}
const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    page: store.page
  };
};
export default connect(mapStateToProps)(App);
