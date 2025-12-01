// Hamburger menu toggle
const hamburgerBtn = document.getElementById("hamburgerBtn")
const navMenu = document.getElementById("navMenu")

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when clicking a link
document.querySelectorAll(".navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})
 