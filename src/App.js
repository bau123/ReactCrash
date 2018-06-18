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

  handleAddProject(project) {
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    ths.setState({ projects: projects });
  }
  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}
export default App;
