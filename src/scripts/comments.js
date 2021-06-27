import { getComments } from "./services/getComments";

export const comments = () => {
  getComments().then(function (data) {
    showComments(data);
    jsonToarray(data);
  });
};

const showComments = (comments) => {
  console.log(comments.splice(0, 30));
};

const jsonToarray = (comments) => {
  console.log(comments.splice(0, 50));
};
