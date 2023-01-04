import { selector } from "./genericFunctions.js";

function eventClickButtonHeader() {
  const buttons = selector.$All(".header--button");
  buttons.forEach((button) => {
    console.log(button);
    button.addEventListener("click", () => {
      const modal = selector.$One("dialog");
      modal.show();
    });
  });
}
eventClickButtonHeader();
