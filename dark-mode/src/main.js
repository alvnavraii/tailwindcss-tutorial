const darkModeInput = document.querySelector("#darkmode");

darkModeInput.addEventListener("change", (event) => {
  document.documentElement.classList.toggle("dark", event.target.checked);
});
