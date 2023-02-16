import axios from "axios";

import character from "../interfaces/character";
import characterAppearance from "../interfaces/characterAppearance";
import characterPowerStats from "../interfaces/characterPowerStats";

async function fetchAndSetDetails(
  setDetails: Function,
  id_: string | undefined
) {
  let { data } = await axios.get(
    `https://www.superheroapi.com/api.php/1378397882930693/${id_}`
  );
  let { name, id } = data;
  let { gender, race, height, weight } = data.appearance;
  let powerstats: characterPowerStats = data.powerstats;
  let appearance: characterAppearance = {
    gender,
    race,
    height,
    weight,
    eyeColor: data.appearance["eye-color"],
    hairColor: data.appearance["hair-color"],
  };
  let c: character = {
    name,
    fullName: data.biography["full-name"],
    id,
    powerstats,
    appearance,
    imgUrl: data.image.url,
    placeOfBirth: data.biography["place-of-birth"],
    firstAppearance: data.biography["first-appearance"],
    publisher: data.biography.publisher,
  };
  setDetails(c);
}

export default fetchAndSetDetails;
