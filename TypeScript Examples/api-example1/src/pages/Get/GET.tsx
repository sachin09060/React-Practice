import React, { useState } from "react";
import "./Get.css";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";

interface apiProps {
  id: number;
  name: string;
  age: number;
  address: string;
  phone: string;
  email: string;
  gender: string;
}

const Get = () => {
  const [data, setData] = useState<apiProps[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGet = () => {
    try {
      fetch("https://66b5b740b5ae2d11eb64633a.mockapi.io/api/users/")
        .then((response) => response.json())
        .then((json) => setData(json));
      setLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="get-container">
        <div className="get-heading">
          <h2 className="headeing">Get page using fetch()</h2>
        </div>
        <div className="btn-container">
          <Button
            onClick={handleGet}
            label={loading ? "Loading..." : "Get all data!"}
            disabled={loading}
          />
        </div>

        <div className="data-container">
          {data.length > 0 ? (
            <div className="data-card">
              {data.map((item) => (
                <div key={item.id}>
                  <Card
                    id={item.id}
                    name={item.name}
                    age={item.age}
                    address={item.address}
                    phone={item.phone}
                    email={item.email}
                    gender={item.gender}
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
      </div>
    </>
  );
};

export default Get;
