// Blink animation function
function blinkCards(selector) {
  const cards = document.querySelectorAll(selector);

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("blink-card");

      setTimeout(() => {
        card.classList.remove("blink-card");
      }, 800);

    }, index * 150);
  });
}

// Skills link
document.querySelector('a[href="#skills"]').addEventListener("click", () => {
  blinkCards(".skill-card");
});

// Projects link
document.querySelector('a[href="#projects"]').addEventListener("click", () => {
  blinkCards(".project-card");
});

// Academic link
document.querySelector('a[href="#academic"]').addEventListener("click", () => {
  blinkCards(".academic-card");
});
// Certificates link
document.querySelector('a[href="#certificates"]').addEventListener("click", () => {
  blinkCards(".certificate-card");
});

// Section glow animation
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", function () {
    const targetId = this.getAttribute("href");

    if (targetId.startsWith("#")) {
      const section = document.querySelector(targetId);

      if (section) {
        document.querySelectorAll(".highlight-pulse").forEach(el => {
          el.classList.remove("highlight-pulse");
        });

        section.classList.add("highlight-pulse");

        setTimeout(() => {
          section.classList.remove("highlight-pulse");
        }, 1000);
      }
    }
  });
});

// Resume functions
function openResume() {
  window.open("./kedari_resume.pdf", "_blank", "noopener,noreferrer");
}

function downloadResume() {
  const link = document.createElement("a");
  link.href = "kedari_resume.pdf";
  link.download = "kedari_resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}