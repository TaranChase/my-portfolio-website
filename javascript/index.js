// mousehover script to change color when hovering over a link

// Selecting all links present in navbar
const navLinks = document.querySelectorAll('.navbar a');

// Looping through each link
navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'purple';
  });

  // Moving cursor away from link
  link.addEventListener('mouseout', () => {
    link.style.color = 'white';
  });
});