import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import character from "./interfaces/character";
import fetchAndSetSearchedHeros from "./apiMethods/fetchAndSetSearchedHeros";

function HeroSearchResults() {
  const { name } = useParams();
  const [heros, setHeros] = useState<Array<character>>([]);

  useEffect(() => {
    fetchAndSetSearchedHeros(setHeros, name);
  }, []);

  return (
    <div>
      {heros.length
        ? heros.map((h) => (
            <div>
              <Link to={`/details/${h.id}`}>{h.name}</Link>
              <p>{h.id}</p>
              <img src={h.imgUrl} alt="" />
            </div>
          ))
        : `No heros with the name "${name}" found`}
    </div>
  );
}

export default HeroSearchResults;
