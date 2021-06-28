export const getPhoto = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos").then((response) =>
    response.json()
  );
};
