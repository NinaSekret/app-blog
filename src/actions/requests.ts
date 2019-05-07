import { Dispatch } from "redux";
import { createStandardAction, getType } from "typesafe-actions";
import { getPostsRequest, deletePostRequest, createPostRequest } from "../api";
import { IPost } from "../interfaces";

export const getPostsPending = createStandardAction("GET_POSTS_REQUEST")<
  void
>();
export const getPostsSuccess = createStandardAction("GET_POSTS_SUCCESS")<
  IPost[]
>();
export const getPostsError = createStandardAction("GET_POSTS_ERROR")<string>();

export const deletePostPending = createStandardAction("DELETE_POST_REQUEST")<
  void
>();
export const deletePostSuccess = createStandardAction("DELETE_POST_SUCCESS")<
  number
>();
export const deletePostError = createStandardAction("DELETE_POST_ERROR")<
  string
>();

export const addPostPending = createStandardAction("ADD_POST_REQUEST")<void>();
export const addPostSuccess = createStandardAction("ADD_POST_SUCCESS")<IPost>();
export const addPostError = createStandardAction("ADD_POST_ERROR")<string>();

export function someMiddleware() {
  return (next: any) => (action: any) => {
    if (typeof action === "function") {
      return next(action);
    }

    if (action.type === getType(getPostsPending)) {
      getPostsRequest()
        .then(results => {
          next(getPostsSuccess(results));
        })
        .catch((error: Error) => {
          next(getPostsError(error.message));
          throw error;
        });
      next(action);
      return;
    }

    if (action.type === getType(deletePostPending)) {
      deletePostRequest(action.payload.id)
        .then(() => {
          next(deletePostSuccess(action.payload.id));
        })
        .catch((error: Error) => {
          next(deletePostError(error.message));
          throw error;
        });
      next(action);
      return;
    }

    if (action.type === getType(addPostPending)) {
      createPostRequest(
        action.payload.id,
        action.payload.day,
        action.payload.text
      )
        .then(results => {
          next(addPostSuccess(results));
        })
        .catch((error: any) => {
          next(addPostError(error.message));
          throw error;
        });
      next(action);
      return;
    }

    next(action);
  };
}

// export function getPosts(dispatch: Dispatch<any>) {
//   dispatch(getPostsPending());
//   return getPostsRequest()
//     .then(results => {
//       dispatch(getPostsSuccess(results));
//     })
//     .catch((error: Error) => {
//       dispatch(getPostsError(error.message));
//       throw error;
//     });
// }

// export function deletePost(dispatch: Dispatch<any>, id: number) {
//   dispatch(deletePostPending());
//   return deletePostRequest(id)
//     .then(() => {
//       dispatch(deletePostSuccess(id));
//     })
//     .catch((error: Error) => {
//       dispatch(deletePostError(error.message));
//       throw error;
//     });
// }

// export function addPost(
//   dispatch: Dispatch<any>,
//   id: number,
//   day: string,
//   text: string
// ) {
//   dispatch(addPostPending());
//   return createPostRequest(id, day, text)
//     .then(results => {
//       dispatch(addPostSuccess(results));
//     })
//     .catch((error: any) => {
//       dispatch(addPostError(error.message));
//       throw error;
//     });
// }
