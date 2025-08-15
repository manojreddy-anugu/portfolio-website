// Set current year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
