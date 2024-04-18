function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const text = document.querySelector("#text");
  console.log(text);

  function HiddenText() {
    if (text.hasAttribute("hidden")) {
      text.removeAttribute("hidden");
    } else {
      text.setAttribute("hidden", "true");
    }
  }

  button.addEventListener("click", HiddenText);
}
