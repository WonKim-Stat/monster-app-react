import { Component } from "react";
import "/Users/wonseokkim/complete-react/monster-app-react/src/App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// Class Component
class App extends Component {
  constructor() {
    super(); //call the super class constructor and pass in ()

    this.state = {
      monsters: [], // initial state
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // promise that we will have value ,then value
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            //Either I can pass Object or function inside of setState()
            return { monsters: users }; // now monsters points to user
          }
          // () => {
          //   console.log(this.state);
          // } // to check our state updated correctly.
        )
      );
  }

  //first optimization : take out onchange function out of the rendering to make one method so that it only created once.
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }; // key: name of the variable, value is going to be value of the variable.
    });
  };

  render() {
    //Second Optimization : using Destructuring inside of rendering // more readable
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    // const filteredMonsters = this.state.monsters.filter((monster) => {
    const filteredMonsters = monsters.filter((monster) => {
      // return monster.name.toLowerCase().includes(searchString);
      return monster.name.toLowerCase().includes(searchField); // change it to this.state.searchField
      // return monster.name.toLowerCase().includes(this.state.searchField); // change it to this.state.searchField
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={"Search Monsters"}
          className={"monster-search-box"}
        />

        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })} */}

        <CardList monsters={filteredMonsters} />
        {/* I am just pass string into monsters, We can pass anything we want*/}
      </div>
    );
  }
}

export default App;
