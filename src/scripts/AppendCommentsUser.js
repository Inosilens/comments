class AppendCommentsUser {
  constructor() {
    this.comment = null;
    this.getUserComment();
    this.eventInit();
  }
  getUserComment() {
    return (this.comment = document.querySelector("#message").value);
  }
  append() {
    this.app = document.querySelector("#app");
    this.app.innerHTML += `<div class="media">
            <a class="pull-left" href="#"><img class="media-object" src="" alt=""></a>
            <div class="media-body border mt-5 p-5">
            <h1 class="comments__theme">This comment theme</h1>
              <h4 class="media-heading pt-3">This user name</h4>
              <p>${this.getUserComment()}</p>
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
  eventInit() {
    this.editButton = document.querySelector(".submit");
    this.editButton.addEventListener("click", () => {
      this.append();
    });
  }
}

export default AppendCommentsUser;
