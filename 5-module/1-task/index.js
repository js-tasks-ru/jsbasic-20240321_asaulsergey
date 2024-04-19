function hideSelf() {
  const button = document.querySelector(".hide-self-button");

  function hiddenButton(e) {
    if (e.target.closest(".hide-self-button")) {
      button.hidden = true;
    }
  }

  button.addEventListener("click", hiddenButton);
}
