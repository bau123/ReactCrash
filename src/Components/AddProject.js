import React, { Component } from "react";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }
  static defaultProps = {
    categories: ["Web Design", "Web Development", "Mobile"]
  };

  handleSubmit(e) {
    if (this.refs.tile.value === "") {
      alert("title is required");
    } else {
      this.setState(
        {
          newProject: {
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        },
        function() {
          //console.log(this.state);
          this.props.addProject(this.state.newProject);
        }
      );
    }
    console.log("Submitted");
    e.preventDefault();
  }
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
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
            <select ref="category"> {categoryOptions} </select>
          </div>
          <input type="Submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
