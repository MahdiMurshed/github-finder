import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

// interface RepoType {
//   name: string;
//   description: string;
//   html_url: string;
//   forks: string;
//   open_issues: string;
//   watchers_count: string;
//   stargazers_count: string;
// }

const RepoItem = ({ repo }: any) => {
  return (
    <>
      <div className="card rounded-md bg-gray-800 hover:bg-gray-900">
        <div className="card-body">
          <h3 className="mb-2 text-xl font-semibold">
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <FaLink className="inline mr-2" />
              {repo.name}
            </a>
          </h3>
          <p className="mb-3">{repo.description}</p>
          <div>
            <div className="mr-2 badge badge-info">
              <FaEye className="inline mr-2" />
              {repo.watchers_count}
            </div>
            <div className="mr-2 badge badge-success">
              <FaStar className="inline mr-2" />
              {repo.stargazers_count}
            </div>
            <div className="mr-2 badge badge-error">
              <FaInfo className="inline mr-2" />
              {repo.open_issues}
            </div>
            <div className="mr-2 badge badge-warning">
              <FaUtensils className="inline mr-2" />
              {repo.forks}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoItem;
