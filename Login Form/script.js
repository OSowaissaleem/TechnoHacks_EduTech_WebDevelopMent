const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const hashedPassword = btoa(password);
  Swal.fire(
    'Good job!',
    'Successfully Login',
    'success'
  );
  loginForm.reset();
});

