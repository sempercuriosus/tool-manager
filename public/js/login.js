
/*
  * Login the user
  * 
  * 
*/
const loginUser = async (event) => {
    event.preventDefault();

    // Get the element data
    const userEmail = document.querySelector('#email').value.trim();
    const userPassword = document.querySelector('#password').value.trim();

    // Check they have provided both username aned password
    if (userEmail && userPassword) {

        // access the api route to login the user
        const response = await fetch('/api/users/login', {
            method: 'POST',
            // send data in the body
            body: JSON.stringify({ email: userEmail, password: userPassword }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            // User is logged in, sending them to the home page
            document.location.replace('/');
        } else {
            // User NOT logged in, alert them
            alert('Failed to log in. The username or password was not correct.');
        }
    }
};

/*
  * Add Event Listener
  * 
  * 
*/
const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', loginUser);
