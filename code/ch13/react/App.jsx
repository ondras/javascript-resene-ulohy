import React, { useState, useRef } from "react";
import Results from "./Results.jsx";


export default function App() {
  let [results, setResults] = useState([]);
  let [query, setQuery] = useState("");
  let inputRef = useRef();

  async function onSubmit(e) {
    e.preventDefault();
    let query = inputRef.current.value;
    let response = await fetch(`/search?query=${encodeURIComponent(query)}`);
    let results = await response.json();
    setQuery(query);
    setResults(results);
  }

  return <>
    <h1>Hledání</h1>
    <form onSubmit={onSubmit}>
      <label>
        Hledaný výraz: <input type="text" ref={inputRef} />
      </label>
      <label>
        <button>🔎</button>
      </label>
    </form>
    <Results data={results} query={query} />
  </>;
}
