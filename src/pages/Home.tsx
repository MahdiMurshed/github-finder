import React from "react";
import SearchBar from "../components/layouts/SearchBar";
import UserResults from "../components/users/UserResults";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <UserResults />
    </div>
  );
};

export default Home;
