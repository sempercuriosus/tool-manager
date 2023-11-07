/*
  * Tool List Containers
  * 
  * 
*/
const toolsListContainer = document.querySelector('#tools-list');
const selectedToolsContainer = document.querySelector('#selected-tools');

// Add a new tool to the list
function addNewTool (currentTool) {
    const newListItem = document.createElement('li');

    // Get the tool name and Id to set the li values and add custom data attribute to store the tool's 
    newListItem.textContent = currentTool.tool_name;
    newListItem.setAttribute('data-toolId', currentTool.id);

    // Create a button to select the tool.
    const addButton = document.createElement('button');
    addButton.textContent = 'Add';

    // Add event listener to the Add button
    addButton.addEventListener('click', () => {
        addButtonActions(currentTool);
    });

    // Add the button and the tool to the AVAILABLE list
    newListItem.appendChild(addButton);
    toolsListContainer.appendChild(newListItem);
}



/*
  * Add Button Actions
  * 
  * 
*/
function addButtonActions (currentTool) {
    // Add the selected tool to the list of selected tools.
    const selectedTool = document.createElement('li');

    // Create a button to delete the tool.
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove';

    // Add event listener to delete button
    deleteButton.addEventListener('click', () => {
        deleteButtonActions(selectedTool);
    });

    // Set the data from the tool and set the data-attribute to the tool id
    selectedTool.textContent = currentTool.tool_name;
    selectedTool.setAttribute('data-toolId', currentTool.id);

    // Add the new tool to the selected list, with a delete button
    selectedTool.appendChild(deleteButton);
    selectedToolsContainer.appendChild(selectedTool);
}


/*
  * Delete Button Actions
  * 
  * 
*/
function deleteButtonActions (toolToRemove) {
    // Remove from the list
    toolToRemove.remove();
}


/*
  * Get the tool List
  * 
  * 
*/
const loadTools = (event) => {
    event.preventDefault();

    // set the route to access
    fetch('/api/tools/available', {
        // http method
        method: 'GET',
    })
        .then(response => {
            // If the response is not okay, then show an error
            if (!response.status === 200) {
                alert('The tool list could not be loaded. Please try again later.');
                throw new Error('Failed to load tools.');
            }

            // All okay, getting the response
            return response.json();
        })
        .then(toolList => {


            // Clear the existing content.
            toolsListContainer.innerHTML = '';
            selectedToolsContainer.innerHTML = '';

            // Create and append list items for each tool.
            toolList.forEach(currentTool => {
                addNewTool(currentTool);
            });
        })
        .catch(error => {
            console.error('Error loading tools:', error);
        });
};

// Add event to the page to auto-load the tool list
document.addEventListener('DOMContentLoaded', loadTools);

// Add event to button to manually refresh tool list
const refreshButton = document.querySelector('#button-tools');
refreshButton.addEventListener('click', loadTools);