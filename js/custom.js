// const changeView = document.querySelector("change-view");

// if (changeView.classList.contains === "normal-view") {
//   changeView.classList.remove("collapse-view");
// } else {
//   changeView.classList.add("collapse-view");
// }

const block = document.querySelector("blocks-button");
const stackView = document.querySelector("stack-view");

block.addEventListener("click", blockedContent);

function blockedContent() {
  stackView.classList.add("d-none");
}
