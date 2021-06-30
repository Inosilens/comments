export const getComments = (url) => {
  return fetch(url).then((response) => response.json());
};
