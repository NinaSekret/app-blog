import { createStandardAction } from "typesafe-actions";
import { IPost } from "../interfaces";

export const getPostsPending = createStandardAction("GET_POSTS_REQUEST")<void>();
export const getPostsSuccess = createStandardAction("GET_POSTS_SUCCESS")<IPost[]>();
export const getPostsError = createStandardAction("GET_POSTS_ERROR")<string>();

export const deletePostPending = createStandardAction("DELETE_POST_REQUEST")<void>();
export const deletePostSuccess = createStandardAction("DELETE_POST_SUCCESS")<number>();
export const deletePostError = createStandardAction("DELETE_POST_ERROR")<string>();

export const addPostPending = createStandardAction("ADD_POST_REQUEST")<void>();
export const addPostSuccess = createStandardAction("ADD_POST_SUCCESS")<IPost>();
export const addPostError = createStandardAction("ADD_POST_ERROR")<string>();
