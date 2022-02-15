//create a reducer function for the github state
import { StateType } from "./GithubContext";
export const githubReducer = (state: StateType, action: any) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER_AND_REPOS":
      console.log("user and repos");
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
      };
    // case 'GET_REPOS':
    //     return {
    //         ...state,
    //         repos: action.payload,
    //         loading: false
    //     };
    default:
      return state;
  }
};