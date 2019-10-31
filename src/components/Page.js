import React from "react";
import PropTypes from "prop-types";

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
  };
  render() {
    const { year, photos, isFetching } = this.props;
    return (
      <div className="ib page">
        <p>
          <button className="btn" onClick={this.onBtnClick}>
            AZURE
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            DATADOG
          </button>
        </p>
        <h3> {year} </h3>
        {isFetching ? <p>Loading...</p> : <p>Now you can see the data</p>}
      </div>
    );
  }
}
Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Page;
