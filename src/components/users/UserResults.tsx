import UserItem from "./UserItem";
import { useContext } from "react";
import { GithubContext } from "../../context/github/GithubContext";

const UserResults = () => {
  const { users, loading } = useContext(GithubContext);

  return loading ? (
    <h3>Loading....</h3>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserResults;
