import { useDeferredValue, useMemo, useState } from "react";
import { ResultsList } from "./ResultsList";
import { useNavigate } from "react-router-dom";

export const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const deferredInputValue = useDeferredValue(inputValue);

  const fetchResults = (query) => {
    let results = [];
    for (let i = 1; i <= 10000; i++) {
      results.push(`Result ${i} for query "${query}"`);
    }
    return results;
  };

  const results = useMemo(() => {
    return fetchResults(deferredInputValue);
  }, [deferredInputValue]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <br />
      <button onClick={handleBack}>Back</button>
      <ResultsList results={results} />
    </>
  );
};
