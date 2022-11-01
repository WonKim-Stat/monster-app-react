import { useState, useEffect, ChangeEvent } from "react";
import "/Users/wonseokkim/complete-react/monster-app-react/src/App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

// Step 2.
export type Monsters = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  // 1. useState to set initial values to be changed
  // 2. Fetch call using useEffect / Filtereed Monsters using useEffect
  // 3. Take out all from

  // Step 1.
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monsters[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users") // promise that we will have value ,then value
  //     .then((response) => response.json())
  //     .then((users) => setMonsters(users));
  // }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
