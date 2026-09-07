const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
if (menuBtn) {
  menuBtn.addEventListener('click', () => navbar.classList.toggle('open'));
}
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('open'));
});
document.getElementById('year').textContent = new Date().getFullYear();
