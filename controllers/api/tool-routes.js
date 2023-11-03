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
        res.json(allTools);
    } catch (error) {
        console.error('Error fetching or rendering tools:', error);
        res.status(500).json({ 'Internal Server Error': 'There was an error in processing the current request.' });
    }
});

module.exports = router;


// #endregion Get Tools