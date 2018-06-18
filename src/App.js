import React, { Component } from "react";
import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }
  componentWillMount() {
    this.setState({
      projects: [
        {
          title: "Business Webiste",
          category: "Web Design"
        },
        {
          title: "Social app",
          category: "Mobile Development"
        },
        {
          title: " Eccommerce shooping cart",
          category: "Web Development"
        }
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}
export default App;
