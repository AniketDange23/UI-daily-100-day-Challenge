

function google() {
    alert("google Sign in Successfully Done !");
}


function submitForm() {
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var termsCheckbox = document.getElementById('terms');

    // Validate form data
    if (!username || !email || !password || !confirmPassword || !termsCheckbox.checked) {
        alert('Please fill in all fields and agree to the terms.');
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match.');
        return;
    }

    // Display alert with form details
    var alertMessage = `Username: ${username}\nEmail: ${email}\nPassword: ${password}`;
    alert(alertMessage);




    // Clear the form fields
    document.getElementById('signup-form').reset();
}
