import { IPost } from "./interfaces";

const requestUrl =
  "https://api.backendless.com/E24B7FCC-B7AC-240A-FFC3-8191AAFCAD00/237E1736-7E21-8130-FF83-D12AD6BE6900/data";

function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error("Server error: " + response.statusText);
}

function request<R extends object>(
  url: string,
  method: string,
  body?: object
): Promise<R> {
  const options: any = {
    method
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return fetch(requestUrl + url, options)
    .then(checkStatus)
    .then(response => response.json());
}

export function createPostRequest(id: number, day: string, text: string) {
  return request<IPost>("/post", "POST", {
    id: id,
    day: day,
    text: text
  });
}

export function deletePostRequest(id: number) {
  return request(`/bulk/post?where=id=${id}`, "DELETE");
}

export function getPostsRequest () {
  return request<IPost[]>("/post?sortBy=id%20desc", "GET");
}
