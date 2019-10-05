import fetch from 'isomorphic-unfetch';

// TODO: APIの設計を考える
export const API = (endpoint: string, {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    fetch(endpoint, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }})
      .then((response) => {
          if (response.status >= 400) {
            reject(response);
          }
          resolve(response.json());
      })
  });
};


