/**
 * callback to the login button click
 */
function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    authenticate(email, password, function(result) {
        if (result.error) {
            alert('Login falhou');
            return;
        }

        setCookie('authentication', result.authentication);
        window.location = '/index.html';
    });
}

/**
 * main function for the login page
 */
function main() {
    // TODO if the user is already logged in, redirect him to the main page
}
