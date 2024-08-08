import React, { useState } from "react";
import "./Get.css";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";

interface apiProps {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const Get = () => {
  const [data, setData] = useState<apiProps[]>([]);

  const handleGet = () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => setData(json));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="get-container">
        <div className="btn-container">
          <Button onClick={handleGet} label={"Get Data"} />
        </div>

        <div className="data-container">
          {data.length > 0 ? (
            <div className="data-card">
              {data.map((item) => (
                <div key={item.id}>
                  <Card
                    id={item.id}
                    userId={item.userId}
                    title={item.title}
                    status={item.completed ? "Yes" : "No"}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="instruction">
              <p>Click above Button to Get all Data !</p>
            </div>
          )}
        </div>

        {/* <div className="data-container">
          {data.length > 0 ? (
            <ul>
              {data.map((item) => (
                <div>
                  <li key={item.id}>
                    <p>Title: {item.title}</p>
                    <p>User ID:{item.userId}</p>
                    <p>Completed:{item.completed ? "Yes" : "No"}</p>
                  </li>
                </div>
              ))}
            </ul>
          ) : (
            <p>Click above Button to Get all Data !</p>
          )}
        </div> */}
      </div>
    </>
  );
};

export default Get;
