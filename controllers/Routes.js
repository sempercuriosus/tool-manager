const router = require('../models');
const { sync } = require('../models/tools');

/*
    This is the beginning of the route for the rentals to be displayed on the page that holds
    the tools to be checked out. This data will also show any tools that are pending to be returned
    in the next couple of days (could be changed to be included in phase two)

    TODOS
    -DECIDE WHETHER TO USE ASYNC OR SYNCHRONOUS FUNCTION
    -MAKE SURE THAT THE 'ROUTER.TOOLSCHECKEDOUT' IS PULLING CORRECTLY
*/
router.get ('/', async (req,res) => {
    try {
        const rentals = await router.ToolsCheckedOut.findAll ({
            include: [
                {
                    model: router.ToolsCheckedOut,
                    attributes: ['tool_id','user_id','return_date']
                }
            ]
        });

        const tools = rentals.map()
    }
})

