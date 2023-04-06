import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalStatesContext } from "../Components/utils/global.context";

const Favs = () => {
  const { theme } = useGlobalStatesContext();
  const favs = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className={theme.color}>
      <h1>Favorite Dentists</h1>
      <p className="centered">Here's a list of your favorite Dentists</p>
          
      <div className="card-grid">
        
        {favs.length ? (
          favs.map((fav) => (
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username}
              id={fav.id}
            />
          ))
        ) : (
          <p>No favorites found 😪 </p>
        )}
      </div>
    </div>
  );
};

export default Favs;
