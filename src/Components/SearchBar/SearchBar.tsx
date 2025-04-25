import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import React, { FormEvent, ChangeEvent} from 'react';
import { FC } from "react";
import { useState } from "react";


type SearchBarProps = {
  onSearch: (query: string) => void;
};
const SearchBar: FC<SearchBarProps> =({ onSearch }) => {

  const [query, setQuery] = useState<string>("");

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    // const query = evt.target.elements.search.value.trim();
    // query === "" ? toast.error("Search query cannot be empty!"): onSearch(query);
    // evt.target.reset();
    if (query.trim() === "") {
      toast.error("Search query cannot be empty!")
      return;
    }
    onSearch(query);
      if (evt.target instanceof HTMLFormElement) {
        evt.target.reset();
      }
    // setQuery("");
  };
  const handleInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuery(evt.target.value);
  };
  
  

  return (
    <header className={css.searchbar}>
      <Toaster />
      <form  onSubmit={handleSubmit} className={css.form}>
        <input className={css.input}
          onChange={handleInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
         
        />
        <button type="submit" className={css.searchBarButton} >
     Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;