import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./utils/links";

const Card = ({ name, username, id }) => {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, []);

  const favsHandler = () => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavs = favs.filter((fav) => fav.id !== id);
    debugger;
    setIsFav(!isFav);

    if (isFav) {
      localStorage.setItem("favorites", JSON.stringify(newFavs));
      return;
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify([...favs, { name, username, id }])
    );
  };

  return (
    <div className="card">
      <Link to={`${links.dentist.path}/${id}`}>
        <img src="./images/dentist.png" alt={username} />
        <h4>{name}</h4>
        <p>{username}</p>
      </Link>
      <button onClick={favsHandler} className="favButton">
        <span className={`material-symbols-outlined ${isFav ? "fav" : ""}`}>
          favorite
        </span>
        <span className="isFav">{`${!isFav ? "Add to fav" : "Remove from fav"}`}</span>
      </button>
    </div>
  );
};

export default Card;
