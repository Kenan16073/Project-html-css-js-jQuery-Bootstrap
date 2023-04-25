const togglePassword = document.querySelector('#password-inp');
  const password = document.querySelector('#eye');

  password.addEventListener('click', function () {
    let type = togglePassword.getAttribute('type');
    if(type === 'password'){
      type = 'text';
      this.className = 'fa-solid fa-eye-slash ';
    }else {
      type = 'password';
      this.className = 'fa-solid fa-eye ';
    }
    togglePassword.setAttribute('type', type);
});
const togglePassword2 = document.querySelector('#password-inp2');
  const password2 = document.querySelector('#eye2');

  password2.addEventListener('click', function () {
    let type = togglePassword2.getAttribute('type');
    if(type === 'password'){
      type = 'text';
      this.className = 'fa-solid fa-eye-slash ';
    }else {
      type = 'password';
      this.className = 'fa-solid fa-eye ';
    }
    togglePassword2.setAttribute('type', type);
});

function openCity(evt, cityName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  