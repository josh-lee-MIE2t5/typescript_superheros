import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fetchAndSetDetails from "./apiMethods/fetchAndSetDetails";
import character from "./interfaces/character";
const HeroDetailsPage = () => {
  let { id } = useParams();
  const [details, setDetails] = useState<character | null>(null);
  useEffect(() => {
    fetchAndSetDetails(setDetails, id);
  }, []);

  return <p>{details ? `Name: ${details.name}` : "loading data"}</p>;
};

export default HeroDetailsPage;
