const hamburgerMenu = document.getElementById("hamburger-menu");
const navBar = document.getElementById("navbar");
const closeBtn = document.getElementById("close-btn");
const featuresBtn = document.getElementById("features-btn");
const features_ul = document.getElementById("features-ul");
const companyBtn = document.getElementById("company-btn");
const company_ul = document.getElementById("company-ul");

const featuresBtnArrow = document.getElementById("features-btn-arrow");
const companyBtnArrow = document.getElementById("company-btn-arrow");

hamburgerMenu.addEventListener("click", () => {
  navBar.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  const screenSize = window.innerWidth;
  screenSize < 768
    ? (navBar.style.display = "none")
    : (navBar.style.display = "block");
});

featuresBtn.addEventListener("click", () => {
  if (features_ul.style.display === "block") {
    features_ul.style.display = "none";
  } else features_ul.style.display = "block";
  featuresBtnArrow.style.transition = "transform 0.3s ease";
  featuresBtnArrow.style.transform =
    featuresBtnArrow.style.transform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
});

companyBtn.addEventListener("click", () => {
  if (company_ul.style.display === "block") {
    company_ul.style.display = "none";
  } else company_ul.style.display = "block";
  companyBtnArrow.style.transition = "transform 0.3s ease";
  companyBtnArrow.style.transform =
    companyBtnArrow.style.transform === "rotate(180deg)"
      ? "rotate(0deg)"
      : "rotate(180deg)";
});
