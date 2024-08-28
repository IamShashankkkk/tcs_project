
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const showPasswordCheckbox = document.getElementById('showPassword');
    const capitalRequirement = document.getElementById('capital');
    const specialRequirement = document.getElementById('special');
    const lengthRequirement = document.getElementById('length');

    function validatePassword() {
        const pw = password.value;
        const hasCapital = /[A-Z]/.test(pw);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pw);
        const hasCorrectLength = pw.length >= 8 && pw.length <= 12;

        capitalRequirement.className = hasCapital ? 'valid' : 'invalid';
        specialRequirement.className = hasSpecial ? 'valid' : 'invalid';
        lengthRequirement.className = hasCorrectLength ? 'valid' : 'invalid';

        return hasCapital && hasSpecial && hasCorrectLength;
    }

    password.addEventListener('input', validatePassword);

    showPasswordCheckbox.addEventListener('change', function() {
        const type = this.checked ? 'text' : 'password';
        password.type = type;
        confirmPassword.type = type;
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!validatePassword()) {
            alert('Please ensure your password meets all requirements.');
            return;
        }

        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match.');
            return;
        }
  // If validation passes, redirect to the success page
  const consumerNumber = document.getElementById('consumerNumber').value;
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;

  // Generate a random 5-digit customer ID
  const customerId = Math.floor(10000 + Math.random() * 90000);

  // Redirect to the success page with the details
  window.location.href = `registration-success.html?id=${customerId}&name=${name}&mobile=${mobile}`;
});
});