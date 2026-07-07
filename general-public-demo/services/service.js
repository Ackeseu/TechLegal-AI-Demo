const links = document.querySelectorAll(".service-nav a");
const activeService = document.body.dataset.service;

for (const link of links) {
  if (link.dataset.service === activeService) {
    link.classList.add("active");
  }
}

const yearNode = document.getElementById("currentYear");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
