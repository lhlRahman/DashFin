'use client';
import CardList from "@/Components/CardList/CardList";
import SearchBar from "@/Components/SearchBar/SearchBar";
import { FinancialAPI } from "@/api/FinancialAPI";
import { ChangeEvent, useState, MouseEvent } from "react";
export default function Home() {

  const [search, setSearch] = useState<string>('');

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (search === '') {
            alert('Please enter a search term')
            return;
        }
        FinancialAPI(search).then((data) => {
            console.log(data)
        })
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        }


  return (
    <main>
      <SearchBar
      search={search}
      handleChange={handleChange}
      handleClick={handleClick}
      setSearch={setSearch}
      />
    </main>
  );
}
