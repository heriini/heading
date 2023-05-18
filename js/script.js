// class active humberger menu

const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik mana aja ilang
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// class active help
const helpFormFaq = document.querySelector("#help-form-faq");
const helpButton = document.querySelector(".help-button");

helpButton.onclick = (e) => {
  helpFormFaq.style.display = "flex";
  e.preventDefault();
};

// klik tombol x
document.querySelector(".help-form .close-icon").onclick = (e) => {
  helpFormFaq.style.display = "none";
  e.preventDefault();
};

// klik mana aja ilang
const help = document.querySelector("#help-form-faq");
window.onclick = (e) => {
  if (e.target === help) {
    help.style.display = "none";
  }
};

// class active faq
const faq = document.querySelectorAll(".help-content");
faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
