import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list-component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchString: "",
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("mount");
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      this.setState({ monster: data });
    };
    fetchData();
  }
  onSearchChange = (e) => {
    console.log("handler");
    let searchString = e.target.value.toLowerCase();
    this.setState({ searchString });
  };
  render() {
    console.log("render");
    let { monster, searchString } = this.state;
    let { onSearchChange } = this;
    let filterArr = monster.filter((arr) => {
      return arr.name.toLowerCase().includes(searchString);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="text"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filterArr.map((mon, i) => (
          <CardList key={mon.id} monster={mon} />
        ))}
      </div>
    );
  }
}

export default App;
