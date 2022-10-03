import { useState, useEffect } from "react";
import "/Users/wonseokkim/complete-react/monster-app-react/src/App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  // 1. useState to set initial values to be changed
  // 2. Fetch call using useEffect / Filtereed Monsters using useEffect
  // 3. Take out all from

  // Step 1.
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // Step 2.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // promise that we will have value ,then value
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchField(searchValue);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField); // change it to this.state.searchField
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"Search Monsters"}
        className={"monster-search-box"}
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
