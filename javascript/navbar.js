
let hamburgerbtn = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");
let closebtn = document.querySelector(".close");
hamburgerbtn.addEventListener("click", () => {
  nav_list.classList.add("active");
});
closebtn.addEventListener("click", () => {
  nav_list.classList.remove("active");
})

// Modal functionality
const modal = document.getElementById('auth-modal');
const signInBtn = document.querySelector('.navbar ul .btn'); // The SIGN IN button
const closeBtn = document.querySelector('.close');

// Open modal when SIGN IN is clicked
signInBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  modal.style.display = 'block';
});

// Close modal when X is clicked
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Tab switching
function openTab(evt, tabName) {
  const tabcontent = document.querySelectorAll('.tabcontent');
  const tablinks = document.querySelectorAll('.tablinks');
  tabcontent.forEach(content => content.style.display = 'none');
  tablinks.forEach(link => link.classList.remove('active'));
  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

// Form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for signing up now you can watch free movie for 3 days'); // Success message
  modal.style.display = 'none';
});

document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const password = e.target.querySelector('input[type="password"]').value;
  const confirmPassword = e.target.querySelector('input[type="password"]:nth-child(3)').value;
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  alert('Thank you for signing up now you can watch free movie for 3 days'); // Success message
  modal.style.display = 'none';
});
