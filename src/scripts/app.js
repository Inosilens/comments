import { getComments } from "./services/getComments";
export class GetApi {
  constructor(url) {
    this.url = url;
    this.commentsData = getComments(url);
  }
}
let comments = new GetApi("https://jsonplaceholder.typicode.com/comments");
let image = new GetApi("https://jsonplaceholder.typicode.com/photos");

let getArr = () => {
  image.commentsData.then((data) => {
    let arr = [];
    for (let elem in data.splice(0, 30)) {
      arr.push(data[elem].thumbnailUrl);
    }
  });
};
let a = getArr().then((data) => data++);
console.log(a);

comments.commentsData.then((data) => {
  for (let key in data.splice(0, 30)) {
    for (let i = 0; i <= 30; i++) {
      image.commentsData.then((data) => data.splice(0, 30));
    }
    document.querySelector("#app").innerHTML += `
         <div class="media">
            <a class="pull-left" href="#"><img class="media-object" src=${data[i]} alt=""></a>
            <div class="media-body">
            <h1 class="comments__theme">${data[key].name}</h1>
              <h4 class="media-heading">${data[key].email}</h4>
              <p>${data[key].body}</p>
              <ul class="list-unstyled list-inline media-detail pull-left">
                <li><i class="fa fa-calendar"></i>27/02/2014</li>
                <li><i class="fa fa-thumbs-up"></i>13</li>
              </ul>
              <ul class="list-unstyled list-inline media-detail pull-right">
                <li class=""><a href="">Like</a></li>
                <li class=""><a href="">Reply</a></li>
              </ul>
            </div>
          </div>

        `;
  }
});
