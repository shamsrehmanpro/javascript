function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthBar = document.querySelector(".strength-bar");
    const weakBar = strengthBar.querySelector(".weak");
    const mediumBar = strengthBar.querySelector(".medium");
    const strongBar = strengthBar.querySelector(".strong");
  
    let strengthLevel = 0;
  
    // Check password length
    if (password.length >= 8) {
      strengthLevel++;
    }
  
    // Check for uppercase, lowercase, and numbers
    if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)) {
      strengthLevel += 2;
    }
  
    // Check for special characters (adjust this regex as needed)
    if (/[!@#$%^&*()_+{}\[\]:;<>,.?/~]/.test(password)) {
      strengthLevel++;
    }
  
    // Adjust bar widths based on strength level
    weakBar.style.width = (strengthLevel >= 1 ? 33 : 0) + "%";
    mediumBar.style.width = (strengthLevel >= 2 ? 33 : 0) + "%";
    strongBar.style.width = (strengthLevel >= 3 ? 33 : 0) + "%";
  }