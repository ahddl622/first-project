const els = document.getElementsByClassName("el");

window.addEventListener("scroll", function () {
  const vh = window.innerHeight;

  for (let i = 0; i < els.length; i++) {
    const y = els[i].getBoundingClientRect().y;

    if (y < vh * 0.9) {
      els[i].classList.remove("opacity-0");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".backimage");

  setTimeout(() => {
    text.style.opacity = 1;
  }, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll(".hidden-text");

  setTimeout(() => {
    textElements.forEach((text) => {
      text.style.opacity = 1;
    });
  }, 100);
});

function toggleSubcategory(subcatId) {
  const subcategory = document.getElementById(subcatId);
  if (subcategory.style.display === "none" || !subcategory.style.display) {
    subcategory.style.display = "block";
  } else {
    subcategory.style.display = "none";
  }
}
