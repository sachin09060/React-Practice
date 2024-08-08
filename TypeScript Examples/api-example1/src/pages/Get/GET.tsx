import React, { useState } from "react";
import "./Get.css";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";

interface ApiProps {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const Get = () => {
  const [data, setData] = useState<ApiProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGet = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch data: ${errorText}`);
      }

      const json = await response.json();
      setData(json);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching data:", error);
        setError(`Failed to fetch data. Please try again. Error: ${error.message}`);
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="get-container">
      <div className="btn-container">
        <Button onClick={handleGet} label={"Get Data"} />
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="data-container">
        {data.length > 0 ? (
          <div className="data-card">
            {data.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                userId={item.userId}
                title={item.title}
                status={item.completed ? "Yes" : "No"}
              />
            ))}
          </div>
        ) : (
          <div className="instruction">
            <p>Click the button to get all data!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Get;
