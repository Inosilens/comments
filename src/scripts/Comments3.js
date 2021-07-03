import { getComments } from "./services/getComments";
import { getPhoto } from "./services/getPhoto";
import Current from "./CommentsCurrent";
import AppendCommentsUser from "./AppendCommentsUser";

export class Comments3 {
  constructor() {
    this._listOfComments = null;
    this._listOfImg = null;
    this.getListOfComments().then(() => {
      this.getListOfImg()
        .then(() => {
          this.gropeddata = this.groupAllData();
        })
        .then(() => {
          this.addNewComments();
        })
        .then(this.current)
        .then(this.addUserComments);
    });
  }

  ListComments() {
    return this._listOfComments;
  }
  async getListOfComments() {
    return await getComments().then((data) => {
      this._listOfComments = data;
    });
  }

  listImg() {
    return this._listOfImg;
  }
  async getListOfImg() {
    return await getPhoto().then((data) => {
      this._listOfImg = data;
    });
  }
  groupAllData() {
    const groupedData = [];
    for (let i = 0; i < 10; i++) {
      groupedData.push({
        ...this._listOfComments[i],
        thumbnailUrl: this._listOfImg[i].thumbnailUrl,
      });
    }
    console.log(groupedData);
    return groupedData;
  }

  addNewComments() {
    let content = this.gropeddata;
    for (let key in content) {
      document.querySelector("#app").innerHTML += `<div class="media">
            <a class="pull-left" href="#"><img class="media-object" src=${content[key].thumbnailUrl} alt=""></a>
            <div class="media-bod   y border mt-5 p-5">
            <h1 class="comments__theme">${content[key].name}</h1>
              <h4 class="media-heading pt-3">${content[key].email}</h4>
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
  }

  current() {
    new Current();
  }

  addUserComments() {
    new AppendCommentsUser();
  }
}
