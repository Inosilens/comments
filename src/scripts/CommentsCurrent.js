class Current {
  constructor() {
    this.currents = null;
    this.getCurrentComments();
    this.changeCurrent();
  }

  getCurrentComments() {
    this.currents = document.querySelectorAll(".media");
  }
  changeCurrent() {
    this.text = document.querySelector(".current__comments");
    this.text.innerHTML = `${this.currents.length} comments now`;
    return console.log("All ok");
  }
}
export default Current;
