const togglePassword = document.querySelector('#password-inp');
  const password = document.querySelector('#eye');

  password.addEventListener('click', function (e) {
    let type = togglePassword.getAttribute('type');
    if(type === 'password'){
      type = 'text';
      this.className = 'fa-solid fa-eye-slash';
    }else {
      type = 'password';
      this.className = 'fa-solid fa-eye';
    }
    togglePassword.setAttribute('type', type);
});