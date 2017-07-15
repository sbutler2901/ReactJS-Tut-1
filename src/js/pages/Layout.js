import React from "react";
import { Link } from "react-router";


//import Footer from "../components/layout/Footer";
//import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate() {
    this.props.history.replaceState(null, "/");
  }

  render() {
    const { history } = this.props;
    console.log(history.isActive("archives"));

    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives" activeClassName="test">Archives</Link>
        <Link to="settings">
          <button class="btn btn-success">Settings</button>
        </Link>
        <button onClick={this.navigate.bind(this)}>Featured</button>
      </div>
    );
  }
}
