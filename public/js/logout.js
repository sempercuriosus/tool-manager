/*
  * Logout the user
  * 
  * 
*/
const logoutUser = async () => {
    // Need to replace with a modal  
    // alert('You have been logged out.');

    // Access the route to logout when needed (or session expires)
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
        // Send user back to login
        document.location.replace('/login');
    } else {
        // alert the user they borked something
        alert(response.statusText);
    }
};

const logoutLink = document.querySelector('#logout');
logoutLink.addEventListener('click', logoutUser);
