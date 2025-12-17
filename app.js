const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const formMsg = document.getElementById("formMsg");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

function handleSubmit(e){
  e.preventDefault();
  formMsg.textContent = "Submitted ✅ (Phase 1) — connect this to Web3Forms / Formspree / Firebase next.";
  e.target.reset();
  return false;
}
