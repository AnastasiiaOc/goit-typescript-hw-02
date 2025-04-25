import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import React, { FormEvent } from 'react';
import { FC } from "react";


type SearchBarProps = {
  onSearch: (value: string) => void;
};
const SearchBar: FC<SearchBarProps> =({ onSearch }) => {
  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    // const query = evt.target.elements.search.value.trim();
    const query = evt.target.elements.search.value.trim();
    query === ""
      ? toast.error("Search query cannot be empty!")
      : onSearch(query);
    evt.target.reset();
  }

  return (
    <header className={css.searchbar}>
      <Toaster />
      <form  onSubmit={handleSubmit} className={css.form}>
        <input className={css.input}
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