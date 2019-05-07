import { getType } from "typesafe-actions";
import { getPostsRequest, deletePostRequest, createPostRequest } from "../api";
import * as actions from "../actions/requests";

export function requestsMiddleware() {
  return (next: any) => (action: any) => {

    if (action.type === getType(actions.getPostsPending)) {
      getPostsRequest()
        .then(results => {
          next(actions.getPostsSuccess(results));
        })
        .catch((error: Error) => {
          next(actions.getPostsError(error.message));
          throw error;
        });
      next(action);
      return;
    }

    if (action.type === getType(actions.deletePostPending)) {
      deletePostRequest(action.payload)
      .then(() => {
        next(actions.deletePostSuccess(action.payload));
      })
      .catch((error: Error) => {
        next(actions.deletePostError(error.message));
        throw error;
      });
      next(action);
      return;
    }

    if (action.type === getType(actions.addPostPending)) {
      createPostRequest(
        action.payload.id,
        action.payload.day,
        action.payload.text
      )
        .then(results => {
          next(actions.addPostSuccess(results));
        })
        .catch((error: any) => {
          next(actions.addPostError(error.message));
          throw error;
        });
      next(action);
      return;
    }

    next(action);
  };
}