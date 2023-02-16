import characterPowerStats from "./characterPowerStats";
import characterAppearance from "./characterAppearance";

export default interface character {
  name: string;
  fullName: string;
  id: string;
  powerstats: characterPowerStats;
  appearance: characterAppearance;
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  imgUrl: string;
}
