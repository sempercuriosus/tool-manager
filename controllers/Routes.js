const express = require('express');
const router = express.Router();
const { Tool, ToolCheckedOut } = require('../models');

//Rental Routes
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

