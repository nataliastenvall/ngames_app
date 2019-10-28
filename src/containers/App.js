import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import { setYear } from "../actions/PageActions";
import "./App.css";

class App extends Component {
  render() {
    const { user, page, setYearAction } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My data</h1>
        </header>
        <p className="App-intro">Here will be my data</p>
        <User name={user.name} />
        <Page photos={page.photos} year={page.year} setYear={setYearAction} />
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

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
