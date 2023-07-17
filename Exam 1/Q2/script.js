document.addEventListener('DOMContentLoaded', function() {
    // Sign In modal
    var logInModal = document.getElementById('lognin-modal');
    var logInBtn = document.getElementById('login-btn');
    var logInClose = logInModal.getElementsByClassName('close')[0];
  
    logInBtn.addEventListener('click', function() {
      logInModal.style.display = 'block';
    });
  
    lognInClose.addEventListener('click', function() {
      logInModal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === logInModal) {
        logInModal.style.display = 'none';
      }
    });
  
    // Sign Up modal
    var signUpModal = document.getElementById('signup-modal');
    var signUpBtn = document.getElementById('signup-btn');
    var signUpClose = signUpModal.getElementsByClassName('close')[0];
  
    signUpBtn.addEventListener('click', function() {
      signUpModal.style.display = 'block';
    });
  
    signUpClose.addEventListener('click', function() {
      signUpModal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === signUpModal) {
        signUpModal.style.display = 'none';
      }
    });
  });
  