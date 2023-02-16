import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSearchForm = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();
  const onSearchTextChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchText(evt.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    navigate(`/search/${searchText}`);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchText">Search</label>
        <input
          type="text"
          name="searchText"
          id="searchText"
          value={searchText}
          onChange={onSearchTextChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default HeroSearchForm;
