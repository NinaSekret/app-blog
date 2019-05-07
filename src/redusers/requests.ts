import { IPost } from "../interfaces";
import * as actions from "../actions/requests";

import { getType, ActionType } from "typesafe-actions";

type IAction = ActionType<typeof actions>;

type IInitialState = {
  posts: IPost[];
  isloading: boolean;
  error: string | null;
};

const initialState: IInitialState = {
  posts: [],
  isloading: false,
  error: null
};

export default function reducer(
  state: IInitialState = initialState,
  action: IAction
): IInitialState {
  switch (action.type) {
    case getType(actions.getPostsPending):
      return { ...state, isloading: true };
    case getType(actions.getPostsSuccess):
      return { ...state, posts: action.payload, isloading: false };
    case getType(actions.getPostsError):
      return { ...state, isloading: false, error: action.payload };
    case getType(actions.deletePostPending):
      return { ...state, isloading: true };
    case getType(actions.deletePostSuccess):
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload),
        isloading: false
      };
    case getType(actions.deletePostError):
      return { ...state, isloading: false, error: action.payload };
    case getType(actions.addPostPending):
      return { ...state, isloading: true };
    case getType(actions.addPostSuccess):
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: action.payload.id,
            day: action.payload.day,
            text: action.payload.text
          }
        ],
        isloading: false
      };
    case getType(actions.addPostError):
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
}
