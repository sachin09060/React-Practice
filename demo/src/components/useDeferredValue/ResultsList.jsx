export const ResultsList = ({ results }) => {
  return (
    <>
      <h1>From Results List</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </>
  );
};
