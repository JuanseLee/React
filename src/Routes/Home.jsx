import axios from "axios";
import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalStatesContext } from "../Components/utils/global.context";

const Home = () => {
  const { theme, dentists, setdentists } = useGlobalStatesContext();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setdentists(res.data);
    });
  }, []);

  return (
    <main className={theme.color}>
      <h1>Welcome, this is the list of available dentists</h1>
      <div className="card-grid">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
