// Remove 'no-js' if JavaScript is running
document.documentElement.classList.remove("no-js");



 const toggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    if (navMenu.style.display === 'flex') {
      navMenu.style.display = 'none';
    } else {
      navMenu.style.display = 'flex';
    }
  });
