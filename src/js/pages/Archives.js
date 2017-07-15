import React from "react";

//import Footer from "../components/layout/Footer";
//import Nav from "../components/layout/Nav";
//
export default class Archives extends React.Component {
  render() {
    //console.log(this.props);
    const { query } = this.props.location;
    const { params } = this.props;
    const { date, filter } = query;
    return (
      <div>
        <h1>Archives ({params.article})</h1>
        <h4>Date: {date}, filter: {filter}</h4>
      </div>
    );
  }
}
