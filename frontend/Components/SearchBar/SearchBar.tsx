import React, { ChangeEvent, useState, SyntheticEvent, FormEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    <form onSubmit={onSearchSubmit}> 
    <div>
      <input value={search} onChange={handleSearchChange}></input>
    </div>
    </form>
  );
};

export default Search;