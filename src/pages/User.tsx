import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { GithubContext } from "../context/github/GithubContext";
import { Link } from "react-router-dom";
import { getUserAndRepo } from "../context/github/GithubActions";
import RepoList from "../components/repos/RepoList";

const User = () => {
  const { user, repos, loading, dispatch } = useContext(GithubContext);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });

    const gettingData = async () => {
      const userData = await getUserAndRepo(params.login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
    };

    //doesnt work
    //dispatch({ type: "GET_USER_AND_REPOS", payload: userData });

    gettingData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return loading ? (
    <h3>Loading....</h3>
  ) : (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4 ml-5">
          <Link to="/" className="btn btn-ghost">
            Go Back To Search
          </Link>
        </div>
        <div className="grid items-center grid-cols-1 md:grid-cols-3">
          <div className="card w-36 md:w-48 lg:w-64   ml-6">
            <figure>
              <img src={avatar_url} alt="car!" />
            </figure>
          </div>
          <div className="card-body text-lg col-span-2">
            <h2 className="card-title">{name}</h2>
            <p>{bio}</p>
            <div className="justify-start  card-actions">
              <button className="btn btn-outline">
                <a href={html_url} target="_blank" rel="noreferrer">
                  Visit on Github
                </a>
              </button>
              <button className="btn btn-outline">
                <a
                  href={`https://twitter.com//${twitter_username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </button>
              <button className="btn btn-outline">
                <a href={`https://${blog}`} target="_blank" rel="noreferrer">
                  Website
                </a>
              </button>
            </div>
          </div>
          <div className="md:mt-4 shadow stats md:col-span-3">
            <div className="stat place-items-center">
              <div className="stat-title">Followers</div>
              <div className="stat-value">{followers}</div>
            </div>

            <div className="stat place-items-center ">
              <div className="stat-title">Following</div>
              <div className="stat-value text-secondary">{following}</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Public Repos</div>
              <div className="stat-value">{public_repos}</div>
              <div className="stat-desc">{`public gists ${public_gists}`}</div>
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
