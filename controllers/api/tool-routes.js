/*
  * Tool Routes
  * 
  * Actions for the Tools
  * 
*/
// Express Instance
const express = require('express');
// Router
const router = express.Router();
// Models
const { Tools, ToolsCheckedOut } = require('../../models');


/*
 * Get the tools in the database
 * 
*/
router.get('/', async (req, res) => {
    try {
        const userId = req.session.user_id;

        // Get All of the tools from the DB
        const userRentals = await ToolsCheckedOut.findAll({
            where: { user_id: userId },
            include: [
                {
                    model: Tools,
                    attributes: [ 'tool_name' ],
                },
            ],
        });

        // returning tools
        res.json(userRentals);

    } catch (error) {
        res.status(500).json({ 'Internal Server Error': 'There was an error in processing the current request.' });
    }
});

/*
 * Get the tools in the database
 * 
*/
router.get('/available', async (req, res) => {
    try {
        // Get All of the tools from the DB
        const allTools = await Tools.findAll({
            // Planning on using this later on...
            // where: { is_available: 1 },
            attributes: [ 'id', 'tool_name' ]
        });

        // returning tools
        res.json(allTools);

    } catch (error) {
        res.status(500).json({ 'Internal Server Error': 'There was an error in processing the current request.' });
    }
});


/*
  * Add a new Rental 
  *
*/
router.post('/add-rental', async (req, res) => {

    // #region REQUEST BODY
    /*
      * request body
      * user_id  -> INT
      * tool_ids  -> Array of INT
      * start_date -> string
      * end_date -> string

        {
            "user_id": 0
            "tool_ids": []
            "start_date": ""
            "end_date": ""
        }
    */

    // #endregion REQUEST BODY


    // check request body has required params
    if (!req.session.user_id ||
        !req.body.tool_ids ||
        !req.body.start_date ||
        !req.body.end_date) {

        //  Return Error if not
        return res.status(400).json({ 'response': 'The request made is missing data needed in order to complete the rental.' });
    }

    // if the user is logged in, making the reqeust assuming they are valid then. 
    // so long as there is an ID I do not care what it is. 
    const userId = req.session.user_id;
    const toolIds = req.body.tool_ids;
    const startDate = req.body.start_date;
    const endDate = req.body.end_date;

    // Check if the tools exist in the 'tools' table before creating 'ToolsCheckedOut' records
    const validToolList = await Tools.findAll({
        where: {
            id: toolIds,
        },
    });

    // Compare the tools passed in vs the resulting amount of ids returned
    // if there is a difference, then there is a tool missing, meaning a tool is not valid
    if (validToolList.length !== toolIds.length) {
        return res.status(404).json({ 'response': 'One or more of the tools attempting to be added do not exist.' });
    }

    try {
        // Parse the list of tools to add each one as a record in the db
        const toolsRented = await Promise.all(toolIds.map(toolId => ToolsCheckedOut.create({
            user_id: userId.toString(),
            tool_id: toolId.toString(),
            checkout_date: startDate.toString(),
            return_date: endDate.toString()
        })));



        // Return 
        return res.status(200).json({ 'response': 'The rental has been confirmed!'/*, 'tools': toolsRented*/ });

    } catch (error) {
        // Return Error
        // console.log(error);

        if (error.name === 'SequelizeUniqueConstraintError') {
            // Duplicate entry error

            return res.status(400).json({ response: 'There cannot be a duplicate rental for the user and tool id' });
        } else {
            // Other errors
            return res.status(500).json({ response: 'There was an issue adding the rental.' });
        }
    }
});

// Export
module.exports = router;