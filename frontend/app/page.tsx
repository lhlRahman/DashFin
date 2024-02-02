'use client';
import { ChangeEvent, SyntheticEvent, useState } from "react";
import CardList from "@/Components/CardList/CardList";
import Search from "@/Components/SearchBar/SearchBar";
import { searchCompanies } from "@/app/api";
import { CompanySearch } from "../company";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  console.log(process.env.FINANCIAL_API)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    //setServerError(result.data);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      <CardList searchResults={searchResult} />
      {serverError && <div>Unable to connect to API</div>}
      {/* {serverError ? <div>Connected</div> : <div>Unable to connect to api</div>} */}
    </div>
  );
}

export default App;