function validateForm() {
  // Reset errors
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  // Validate email
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = "E-mail adress is not valid";
    return false;
  }

  // Validate password
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    passwordError.textContent =
      "Password should inlcude 8 characters, 1 small letter, 1 CAPITAL Letter, 1 Number ";
    return false;
  }

  // Validate confirm password
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    return false;
  }

  // Form is valid
  return true;
}
