class Current {
  constructor(data) {
    this.currents = data;
    this.changeCurrent();
  }

  changeCurrent() {
    let text = document.querySelector(".current__comments");
    text.innerHTML = `${this.currents} comments now`;
    console.log(this.currents);
  }
}
export default Current;
