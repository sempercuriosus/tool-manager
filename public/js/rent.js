

/*
  * Create a Rental
  * 
  * 
*/
const createRental = async (event) => {

    //Selected Tool List -  What the user is planning on getting

    const selectedToolsContainer = document.querySelector('#selected-tools');

    // Convert HTMLCollection to an array.
    const toolList = Array.from(selectedToolsContainer.querySelectorAll('li'));
    const toolCount = toolList.length;

    // If there are NOT tools, then alert the user they need one or more.
    if (toolCount == 0) {
        alert('Select at least one tool to complete the rental process, please.');
        return;
    }

    // Set empty array for the tools (also will reset on button click)
    let rentedToolsIds = [];

    // Loop through the <li> elements and collect the data-toolId attributes.
    toolList.forEach(li => {
        const toolId = li.getAttribute('data-toolId');
        if (toolId !== null) {
            rentedToolsIds.push(Number(toolId));
        }
    });

    console.log(rentedToolsIds);

    // Set the route to use
    const rentedToolResponse = await fetch('/api/tools/add-rental', {
        method: 'POST',
        // data to include in renting 
        // note, the user id is missing here, I used a session, so the user information is retrieved from the server-side
        body: JSON.stringify({
            tool_ids: rentedToolsIds
            , start_date: "2023-11-06"
            , end_date: "2024-01-01"
        }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (rentedToolResponse.status === 200) {
        // clear the rentals
        selectedToolsContainer.innerHTML = "";
        // let the user know
        alert('Your rental was confirmed!');
    }
    else if (rentedToolResponse.status === 400) {
        // clear the rentals
        selectedToolsContainer.innerHTML = "";
        // let the user know
        alert('There was a duplicate rental.');
    }
    else { }
};


/*
  * Rent Button Event
  * 
  * 
*/
const rentButton = document.querySelector('#rent-button');
rentButton.addEventListener('click', createRental);
