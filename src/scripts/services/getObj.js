export const getResponse = () => {
  return fetch("https://jsonplaceholder.typicode.com/comments").then(
    (response) => response.json()
  );
};
