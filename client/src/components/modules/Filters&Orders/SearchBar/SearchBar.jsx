import { useState } from "react";
import { useDispatch } from "react-redux";
import { emptyInput, queryRecipes } from "../../../../redux/actions";

import styles from "./SearchBar.module.css"

export default function SearchBar({ resetPage }) {
  let dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    resetPage();
    if (input === "") {
    //  return dispatch(emptyInput())
      return window.alert("Cannot search if the input is empty");
    }
    dispatch(queryRecipes(input));
  };

  return (
    <div>
      <form className={styles.searchBar}  onSubmit={(e) => handleSumbit(e)}>
        <input
          type={"text"}
          placeholder="Search Recipes by Name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSumbit}>Search</button>
      </form>
    </div>
  );
}
