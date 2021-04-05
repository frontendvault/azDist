const changeView = document.querySelector("change-view");

if (changeView.classList.contains === "normal-view") {
  changeView.classList.remove("collapse-view");
} else {
  changeView.classList.add("collapse-view");
}
