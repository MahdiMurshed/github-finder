import React, { useState, useContext } from "react";
import { searchUsers } from "../../context/github/GithubActions";
import { GithubContext } from "../../context/github/GithubContext";

const SearchBar = () => {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (text === "") return;
    dispatch({ type: "SET_LOADING" });
    const data = await searchUsers(text);
    dispatch({ type: "GET_USERS", payload: data });

    console.log(text);
  };
  const handleClear = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    dispatch({ type: "CLEAR_USERS" });
  return (
    <div className="grid grid-cols-1 ">
      <div className="form-control mb-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="input w-full "
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <div
            className="btn rounded-l-none absolute w-36 top-0 right-0"
            onClick={handleSubmit}
          >
            Go
          </div>
        </div>
      </div>
      {users.length > 0 && (
        <div className="btn btn-sm btn-ghost " onClick={handleClear}>
          Clear
        </div>
      )}
      <div className="divider mb-7"></div>
    </div>
  );
};

export default SearchBar;
