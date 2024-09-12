const markAll = document.querySelector("#mark-all");
const posts = document.querySelectorAll(".post");
const numberElement = document.querySelector("#number");

posts.forEach((post) => {
  post.addEventListener("click", () => {
    const marca = post.querySelector(".not-read");
    if (marca) {
      marca.classList.remove("not-read");
      numberElement.textContent = document.querySelectorAll(".not-read").length;
    }
  });
});

markAll.addEventListener("click", () => {
  const notRead = document.querySelectorAll(".not-read");
  notRead.forEach((item) => {
    item.classList.remove("not-read");
  });

  const count = document.querySelectorAll(".not-read");
  numberElement.textContent = count.length;
});
