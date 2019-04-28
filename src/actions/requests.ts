import { Dispatch } from "redux";
import { createStandardAction } from 'typesafe-actions';
import {
  getPostsRequest,
  deletePostRequest,
  createPostRequest
} from "../api";
import { IPost } from "../interfaces";

export const getPostsPending = createStandardAction('GET_POSTS_REQUEST')<void>();
export const getPostsSuccess = createStandardAction('GET_POSTS_SUCCESS')<IPost[]>();
export const getPostsError = createStandardAction('GET_POSTS_ERROR')<string>();

export const deletePostPending = createStandardAction('DELETE_POST_REQUEST')<void>();
export const deletePostSuccess = createStandardAction('DELETE_POST_SUCCESS')<number>();
export const deletePostError = createStandardAction('DELETE_POST_ERROR')<string>();

export const addPostPending = createStandardAction('ADD_POST_REQUEST')<void>();
export const addPostSuccess = createStandardAction('ADD_POST_SUCCESS')<IPost>();
export const addPostError = createStandardAction('ADD_POST_ERROR')<string>();





export function getPosts() {
  return (dispatch: Dispatch<any>) => {
    dispatch(getPostsPending());
    return getPostsRequest()
      .then(results => {
        dispatch(getPostsSuccess(results));
      })
      .catch((error: Error) => {
        dispatch(getPostsError(error.message));
        throw error;
      });
  };
}


export function deletePost(id: number) {
  return (dispatch: Dispatch<any>) => {
    dispatch(deletePostPending());
    return deletePostRequest(id)
      .then(() => {
        dispatch(deletePostSuccess(id));
      })
      .catch((error: Error) => {
        dispatch(deletePostError(error.message));
        throw error;
      });
  };
}

export function addPost(id: number, day: string, text: string) {
  return (dispatch: Dispatch<any>) => {
    dispatch(addPostPending());
    return createPostRequest(id, day, text)
      .then(results => {
        dispatch(addPostSuccess(results));
      })
      .catch((error: any) => {
        dispatch(addPostError(error.message));
        throw error;
      });
  };
}
