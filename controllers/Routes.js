// const router = require('../models');
// const { sync } = require('../models/tools');

// /*
//     This is the beginning of the route for the rentals to be displayed on the page that holds
//     the tools to be checked out. This data will also show any tools that are pending to be returned
//     in the next couple of days (could be changed to be included in phase two)

//     TODOS
//     -DECIDE WHETHER TO USE ASYNC OR SYNCHRONOUS FUNCTION
//     -MAKE SURE THAT THE 'ROUTER.TOOLSCHECKEDOUT' IS PULLING CORRECTLY
// */
// router.get ('/', async (req,res) => {
//     try {
//         const rentals = await router.ToolsCheckedOut.findAll ({
//             include: [
//                 {
//                     model: router.ToolsCheckedOut,
//                     attributes: ['tool_id','user_id','return_date']
//                 }
//             ]
//         });

        
//     }
// })


const express = require('express');
const router = express.Router();
const { Tool, ToolCheckedOut } = require('../models');

router.get('/render-tools', async (req, res) => {
  try {

    const allTools = await router.Tools.findAll({
        attributes: ['id','tool_name']
    });

    const checkedOutTools = await ToolsCheckedOut.findAll({
      attributes: ['tool_id','id'],
    });

    const availableTools = allTools.filter((tool) => {
      return !checkedOutTools.some((checkedOutTool) => checkedOutTool.tool_id === tool.id);
    });

    res.render('tools', { tools: availableTools });
  } catch (error) {
    console.error('Error fetching or rendering tools:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

