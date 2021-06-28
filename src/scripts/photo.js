import { getPhoto } from "./services/getPhoto.js";

export const getJsonApi = () => {
  getPhoto().then((data) => {
    let result = spliceJson(data);
    forever();
  });
};

let consPhoto = (data) => {
  console.log(data);
};

let spliceJson = (data) => {
  let result = data.splice(0, 30);
  return result;
};

const forever = () => {
  let allImg = document.querySelectorAll(".media-object");
  for (let key = 0; key < allImg.lenght; key++) {
    allImg[key].src = "hueta";
  }
};
