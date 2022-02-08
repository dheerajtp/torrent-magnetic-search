import { useToasts } from "react-toast-notifications";
import React,{ useState, useContext } from "react";
import { ResultContext } from "../Result";
import { SearchContext } from "../SearchContext";
import { ErrorContext } from "../ErrorContext";
import { GotOrNotContext } from "../GotOrNotContext";

const Search = () => {
  const { addToast } = useToasts();
  // eslint-disable-next-line
  const [magneticResult, setMagneticResult] = useContext(ResultContext);
  // eslint-disable-next-line
  const [search, setSearch] = useContext(SearchContext);
  // eslint-disable-next-line
  const [error, setError] = useContext(ErrorContext);
  // eslint-disable-next-line
  const [gotOrNot, setGotOrNot] = useContext(GotOrNotContext);
  const [query, setQuery] = useState("");

  const inputHandler = (e) => {
    setQuery(e.target.value);
    setSearch(false);
    setGotOrNot(false);
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setError(false);
    setSearch(true);
    setGotOrNot(false);
    if (query.length === 0) {
      addToast("Please Enter Your Search Query...!", { appearance: "warning" });
      setSearch(false);
      setGotOrNot(false);
    } else {
      let newkeyword =await query.replace(/\s/g,'%20');
      addToast("Searching...!", { appearance: "warning" });
      setSearch(true);
      getTorrent(newkeyword);
    }
  };

  const getTorrent = async (key) => {
    const details = await fetch(`${process.env.REACT_APP_API}${key}`, {
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    });
    const data = await details.json();
    console.log(data);
    if (data.message === "API is Down!") {
      setError(true);
    } else {
      setSearch(false);
      setMagneticResult(data);
      setGotOrNot(true);
    }
  };

  return (
    <div className="mt-2 flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
      <form onSubmit={formHandler}>
        <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 opacity-30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            className="bg-gray-100 outline-none"
            type="text"
            name="query"
            value={query}
            onChange={inputHandler}
            placeholder="Enter Your Search Item"
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
