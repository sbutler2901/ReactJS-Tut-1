import React from "react";

import Footer from "./Footer"
import Header from "./Header";

export default class Layout extends React.Component {
  // To implement logic, better to create method in class:
  constructor() {
    super();
    // Changes to a state will update in the virtual dom
    // and efficiently update the real dom 
    // State is only used if a component has a internal value that
    // only affects that component and nothing else.
    this.state = {name: "Bill"};
   }

  render() {
    setTimeout(() => {
      this.setState({name: "Bob"})
    }, 1000)

    const title = "Welcome Well!";

    return (
      <div>
      <Header title={title} />
      <h1>My name is {this.state.name}!</h1>
      <Footer />
      </div>
    );
  }
}
