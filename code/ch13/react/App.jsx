import { useState } from "react";
import Results from "./Results.jsx";


export default function App() {
  let [results, setResults] = useState({});

  async function onSubmit(e) {
    e.preventDefault();
    let query = e.target.elements.query.value;
    let response = await fetch(`/search?query=${encodeURIComponent(query)}`);
    let results = await response.json();
    setResults({results, query});
  }

  return <>
    <h1>Hledání</h1>
    <form onSubmit={onSubmit}>
      <label>
        Hledaný výraz: <input type="text" name="query" />
      </label>
      <label>
        <button>🔎</button>
      </label>
    </form>
    <Results data={results} />
  </>;
}
