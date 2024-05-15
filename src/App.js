import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-bar/search-bar-component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchString: "",
    };
  }
  componentDidMount() {
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
    let searchString = e.target.value.toLowerCase();
    this.setState({ searchString });
  };
  render() {
    let { monster, searchString } = this.state;
    let { onSearchChange } = this;
    let filterArr = monster.filter((arr) => {
      return arr.name.toLowerCase().includes(searchString);
    });
    return (
      <div className="App">
        <SearchBox handlerFunction={onSearchChange} />
        <CardList monsters={filterArr} />
      </div>
    );
  }
}

export default App;
