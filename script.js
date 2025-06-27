const header = document.getElementById('main-header');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const dropdown = document.querySelector('.dropdown');

// Track menu state
let isMenuOpen = false;

// Scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Reduced threshold to 50px
    header.classList.add('scrolled');
  } else {
    // Only remove scrolled class if menu isn't open
    if (!isMenuOpen) {
      header.classList.remove('scrolled');
    }
  }
});

// Toggle sidebar and menu button
menuToggle.addEventListener('click', () => {
  isMenuOpen = !isMenuOpen;
  sidebar.classList.toggle('open');
  menuToggle.textContent = isMenuOpen ? '×' : '≡';
  
  // Toggle menu-open class on header
  if (isMenuOpen) {
    header.classList.add('menu-open');
  } else {
    header.classList.remove('menu-open');
    // Re-check scroll position when closing menu
    if (window.scrollY <= 50) {
      header.classList.remove('scrolled');
    }
  }
});

// Toggle dropdown
dropdown.querySelector('span').addEventListener('click', () => {
  dropdown.classList.toggle('open');
});
