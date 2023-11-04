// #region Get Tools
/*
 * API Request to get the tools in the database
 * 
*/

const express = require('express');
const router = express.Router();
const { Tools, ToolsCheckedOut } = require('../../models');

//Rental Routes
router.get('/', async (req, res) => {
    try {

        const allTools = await Tools.findAll({
            attributes: [ 'id', 'tool_name' ]
        });

        // Stage 2
        // const checkedOutTools = await Tools.findAll({
        //     attributes: [ 'id', 'tool_name' ],
        //     where: {
        //         is_available: true
        //     }
        // });

        // const availableTools = allTools.filter((tool) => {
        //     return !checkedOutTools.some((checkedOutTool) => checkedOutTool.tool_id === tool.id);
        // });

        // res.send('tools', { tools: availableTools });

        // returning all tools
        res.json(allTools);

    } catch (error) {
        console.error('Error fetching or rendering tools:', error);
        res.status(500).json({ 'Internal Server Error': 'There was an error in processing the current request.' });
    }
});


/*
  * get the json file from the front end
  * accept the json
  * check there is json
  * then insert the new record with the following information
*/
router.post('/add-rental', async (req, res) => {
    // console.log('post user tool rental to db');
    // res.status(200).json({ 'response': 'posted the user tool rental to db' });

    /* request body
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


    // return response
    if (!req.body.user_id ||
        !req.body.tool_ids ||
        !req.body.start_date ||
        !req.body.end_date) {

        return res.status(400).json({ 'response': 'The request made is missing data needed in order to complete the rental.' });
    }

    try {
        // if the user is logged in, making the reqeust assuming they are valid then. 
        // so long as there is an ID I do not care what it is. 
        const userId = req.body.user_id;
        const tools = req.body.tool_ids;
        const startDate = req.body.start_date;
        const endDate = req.body.end_date;

        console.log(req.body.user_id,
            req.body.tool_ids,
            req.body.start_date,
            req.body.end_date);

        const toolsRented = await Promise.all(tools.map(toolId => ToolsCheckedOut.create({
            user_id: userId.toString(),
            tool_id: toolId.toString(),
            checkout_date: startDate.toString(),
            reutrn_date: endDate.toString()
        })));

        return res.status(200).json({ 'response': 'The rental has been confirmed!' });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ 'response': 'There was an issue adding the rental.' });
    }
});

module.exports = router;


// #endregion Get Tools