import axios from "axios";
import character from "../interfaces/character";
import characterAppearance from "../interfaces/characterAppearance";
import characterPowerStats from "../interfaces/characterPowerStats";

export default async function fetchAndSetSearchedHeros(
  setHeros: Function,
  name: string | undefined
) {
  let { data } = await axios.get(
    `https://www.superheroapi.com/api.php/1378397882930693/search/${name}`
  );
  let heros: character[] = [];
  for (var c of data.results) {
    let appearance: characterAppearance = {
      gender: c.appearance.gender,
      race: c.appearance.race,
      height: c.appearance.height,
      weight: c.appearance.weight,
      eyeColor: c.appearance["eye-color"],
      hairColor: c.appearance["hair-color"],
    };
    let powerstats: characterPowerStats = c.powerstats;
    let newC: character = {
      name: c.name,
      id: c.id,
      imgUrl: c.image.url,
      placeOfBirth: c.biography["place-of-birth"],
      firstAppearance: c.biography["first-appearance"],
      publisher: c.biography.publisher,
      fullName: c.biography["full-name"],
      appearance,
      powerstats,
    };
    heros.push(newC);
  }
  setHeros(heros);
}
