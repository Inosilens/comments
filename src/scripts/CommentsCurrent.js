class Current {
  constructor() {
    this.getCurrentComments();
    this.changeCurrent();
  }

  getCurrentComments() {
    this.currents = document.querySelectorAll(".media");
  }
  changeCurrent() {
    this.text = document.querySelector(".curent__comments");
    this.text.innerHTML = `${this.currents.length} comments now`;
  }
}
export default Current;
