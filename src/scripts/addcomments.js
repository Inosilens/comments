import { getComments } from "./services/getComments";

export const addcomments = () => {
  getComments().then((data) => {
    let div = document.querySelector(".comments-blog");
    let content = data.splice(0, 30);

    for (let key in content) {
      div.innerHTML += `
        <h1 class="comments__theme">${content[key].name}</h1>
      <h3 class="comments__body">${content[key].body}</h3>
      <p class="comments__email"> ${content[key].email} </p>
        `;
    }
  });
};
