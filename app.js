const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function closeMenu() {
  mobileMenu.style.display = "none";
  mobileMenu.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openMenu() {
  mobileMenu.style.display = "block";
  mobileMenu.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

burger?.addEventListener("click", () => {
  const isOpen = mobileMenu.style.display === "block";
  isOpen ? closeMenu() : openMenu();
});

mobileMenu?.addEventListener("click", (e) => {
  // Close if clicking outside the card
  if (e.target === mobileMenu) closeMenu();
});

// Close on any link click (mobile)
mobileMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => closeMenu());
});

// Fake preview form submit (hook to your email provider later)
document.querySelectorAll(".form").forEach(form => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Preview request received! Connect this to your email service next.");
    form.reset();
  });
});
