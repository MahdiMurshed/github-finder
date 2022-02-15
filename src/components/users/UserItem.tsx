import React from "react";
import { User } from "../../context/github/GithubContext";
import { Link } from "react-router-dom";

type UserProps = {
  user: User;
};
const UserItem = ({ user: { avatar_url, login } }: UserProps) => {
  return (
    <div className="card shadow-md bg-base-100 compact">
      <div className="card-body flex-row items-center space-x-4">
        <div>
          <div className="avatar">
            <div className="rounded-full h-14">
              <img src={avatar_url} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="card-title">{login}</div>
          <Link to={`user/${login}`} className="text-base-content opacity-40">
            visit profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
