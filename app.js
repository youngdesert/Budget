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

const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "fa0b695c-26ca-4ab5-9189-90697343f424");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
});
