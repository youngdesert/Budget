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

const previewForm = document.getElementById("previewForm");
const previewStatus = document.getElementById("previewStatus");
const previewBtn = document.getElementById("previewBtn");

previewForm?.addEventListener("submit", async (e) => {
  e.preventDefault();

  previewStatus.textContent = "Sending...";
  previewBtn.disabled = true;

  try {
    const formData = new FormData(previewForm);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (data.success) {
      previewStatus.textContent = "✅ Sent! Check your email soon for the preview.";
      previewForm.reset();
    } else {
      previewStatus.textContent = "❌ Something went wrong. Try again in a moment.";
      console.error("Web3Forms error:", data);
    }
  } catch (err) {
    previewStatus.textContent = "❌ Network error. Please try again.";
    console.error(err);
  } finally {
    previewBtn.disabled = false;
  }
});

});
