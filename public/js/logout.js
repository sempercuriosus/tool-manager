
/*
  * Logout the user
  * 
  * 
*/
const logoutUser = async () => {
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

const logoutbutton = document.querySelector('#logout');
logoutUser.addEventListener('click', logoutUser);
