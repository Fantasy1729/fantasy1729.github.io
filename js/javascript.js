// Enhanced scroll-to-top button logic with optional smooth behavior

const button = document.getElementById("Top_btn");

if (button) {
  window.addEventListener("scroll", scrollFunction);
  button.addEventListener("click", scrollToTop);
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
