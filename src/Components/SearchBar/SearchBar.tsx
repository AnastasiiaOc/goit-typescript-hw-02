import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import React, { FormEvent } from 'react';
import { FC } from "react";


type SearchBarProps = {
  onSearch: (query: string) => void;
};
const SearchBar: FC<SearchBarProps> =({ onSearch }) => {
  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    // const query = evt.target.elements.search.value.trim();
    const target = evt.target as HTMLFormElement;
    const query = (
      target.elements.namedItem("query") as HTMLInputElement
    ).value.trim();

    if (query.trim() === "") {
      toast.error("Search query cannot be empty!");
      return;
    }
    // query.trim() === "" ? toast.error("Search query cannot be empty!"): onSearch(query);
    // evt.target.reset();
    onSearch(query);
    if (target instanceof HTMLFormElement) {
      target.reset();
    }
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