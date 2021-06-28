import { getComments } from "./services/getComments";
import { getJsonApi } from "./photo";

const div = document.querySelector(".container");
export const addcomments = () => {
  getComments().then((data) => {
    let content = data.splice(0, 30);

    for (let key in content) {
      div.innerHTML += `
         <div class="media">
            <a class="pull-left" href="#"><img class="media-object" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""></a>
            <div class="media-body">
            <h1 class="comments__theme">${content[key].name}</h1>
              <h4 class="media-heading">${content[key].email}</h4>
              <p>${content[key].body}</p>
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
  getJsonApi();
};
