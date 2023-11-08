/*
  * Logout the user
  * 
  * 
*/
const logoutUser = async () => {
    // Need to replace with a modal  
    // alert('You have been logged out.');

    // Access the route to logout when needed (or session expires)
    try {
        const response = await fetch('/api/users/logout', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Send user back to login
            document.location.replace('/');
        } else {
            // alert the user they borked something
            alert(response.statusText);
        }
    }
    catch (error) {
        console.log('ERROR', error);
    }
};

const logoutLink = document.querySelector('#logout');
logoutLink.addEventListener('click', logoutUser);
