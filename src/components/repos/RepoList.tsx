import React from "react";
import RepoItem from "./RepoItem";

interface RepoType {
  id: string;
  name: string;
  description: string;
  html_url: string;
  forks: string;
  open_issues: string;
  watchers_count: string;
  stargazers_count: string;
}
type Repos = {
  repos: RepoType[];
};

const RepoList = ({ repos }: Repos) => {
  const repoItems = repos.map((repo: RepoType) => (
    <RepoItem key={repo.id} repo={repo} />
  ));
  return (
    <div className="card   bg-base-100 shadow-lg mt-4 ">
      <div className="card-body">
        <h2 className="card-title text-lg  ">Latest Repositories</h2>
        <div className="divider mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {repoItems}
        </div>
      </div>
    </div>
  );
};

export default RepoList;
