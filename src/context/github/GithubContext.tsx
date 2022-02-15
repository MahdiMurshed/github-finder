import { createContext, ReactNode, useReducer } from "react";
import { githubReducer } from "./githubReducer";

export type User = {
  login: string;
  avatar_url: string;
  id: string;
  name: string;
  type: string;

  location: string;
  bio: string;
  blog: string;
  twitter_username: string;
  html_url: string;
  followers: string;
  following: string;
  public_repos: string;
  public_gists: string;
  hireable: string;
};
const userValue = {
  login: "",
  avatar_url: "",
  id: "",
  name: "",
  type: "",

  location: "",
  bio: "",
  blog: "",
  twitter_username: "",
  html_url: "",
  followers: "",
  following: "",
  public_repos: "",
  public_gists: "",
  hireable: "",
};

export type ContextType = {
  users: User[];
  loading: boolean;
  user: User;
  repos: any;
  dispatch: any;
};
interface elem {
  children: ReactNode;
}
export interface StateType {
  users: User[];
  loading: boolean;
  user: User;
  repos: any;
}

export const GithubContext = createContext<ContextType>({
  users: [],
  loading: true,
  user: userValue,
  repos: [],
  dispatch: () => {},
});

export const GithubProvider = ({ children }: elem) => {
  const initialState: StateType = {
    users: [],
    loading: false,
    user: userValue,
    repos: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
