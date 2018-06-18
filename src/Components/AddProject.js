import React, { Component } from "react";

class AddProject extends Component {
  static defaultProps = {
    categories: ["Web Design", "Web Development", "Mobile"]
  };
  render() {
    return (
      <div>
        <h3>add project </h3>
        <form>
          <div>
            <label> Title </label>
            <input type="text" ref="tilte" />
          </div>
          <div>
            <label> Category </label>
            <select ref="category" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;
