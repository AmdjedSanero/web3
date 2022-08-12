let btn = document.getElementById("mega-menu");
let mega = document.querySelector(".mega .container");

btn.onmouseover = function () {
  if (mega.style.display == "flex") {
    mega.style.display = "none";
  } else {
    mega.style.display = "flex";
  }
};
mega.onmouseleave = function () {
  mega.style.display = "none";
};
