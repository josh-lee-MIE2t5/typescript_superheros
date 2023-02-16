//Containts routing paths for components
import { Routes, Route } from "react-router-dom";

import HeroDetailsPage from "./HeroDetailsPage";
import HeroSearchForm from "./HeroSearchForm";
import HeroSearchResults from "./HeroSearchResults";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSearchForm />} />
        <Route path="/search/:name" element={<HeroSearchResults />} />
        <Route path="/details/:id" element={<HeroDetailsPage />} />
      </Routes>
    </>
  );
};

export default Main;
