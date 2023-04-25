const togglePassword = document.querySelector('#password-inp');
  const password = document.querySelector('#eye');

  password.addEventListener('click', function (e) {
    let type = togglePassword.getAttribute('type');
    if(type === 'password'){
      type = 'text';
      this.className = 'fa-solid fa-eye-slash fa-beat';
    }else {
      type = 'password';
      this.className = 'fa-solid fa-eye fa-beat';
    }
    togglePassword.setAttribute('type', type);
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


  