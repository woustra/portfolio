// ── Scroll Reveal ──
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

function toggleText(id, btn) {
  const text = document.getElementById(id);

  if (text.style.display === "none") {
    text.style.display = "inline";
    btn.textContent = "Read less";
  } else {
    text.style.display = "none";
    btn.textContent = "Read more";
  }
}
