import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });
  const { data } = await github.get(`/search/users?${params}`);
  return data.items;
};

export const getUserAndRepo = async (login: string | undefined) => {
  const [user, repos] = await Promise.all([
    await github.get(`/users/${login}`),
    await github.get(`/users/${login}/repos`),
  ]);
  console.log(user.data);
  console.log(repos);
  return {
    user: user.data,
    repos: repos.data,
  };
};
