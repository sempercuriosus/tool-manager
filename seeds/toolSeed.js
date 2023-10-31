
const { Tools } = require('../models');

const toolList = [ {
    "tool_name": "Milwaukee Impact Driver 1/4 in. drive",
    "date_added": "10/9/2019",
    "is_available": false
},
{
    "tool_name": "Makita Drill",
    "date_added": "8/18/2019",
    "is_available": true
}
    , {
    "tool_name": "Screwdriver, #1 Phillips",
    "date_added": "7/18/2012",
    "is_available": false
}
    , {
    "tool_name": "Screwdriver, #2 Phillips",
    "date_added": "7/18/2012",
    "is_available": true
}
    , {
    "tool_name": "Screwdriver, #3 Phillips",
    "date_added": "7/18/2012",
    "is_available": false
}
    , {
    "tool_name": "Screwdriver, #2 Flathead",
    "date_added": "7/18/2012",
    "is_available": false
}
    , {
    "tool_name": "Screwdriver, #2 Flathead",
    "date_added": "7/18/2012",
    "is_available": false
}
    , {
    "tool_name": "Screwdriver, #2 Flathead",
    "date_added": "7/18/2012",
    "is_available": false
}
    , {
    "tool_name": "Dewalt Jobsite Tablesaw",
    "date_added": "12/6/2010",
    "is_available": true
}
    , {
    "tool_name": "Dewalt Jobsite Outfeed Table",
    "date_added": "12/6/2010",
    "is_available": false
}
    , {
    "tool_name": "Husky Combination Wrenches, Metric",
    "date_added": "3/19/2003",
    "is_available": true
}
    , {
    "tool_name": "Husky Combination Wrenches, Standard",
    "date_added": "3/19/2003",
    "is_available": true
}
    , {
    "tool_name": "Snapon Impact Driver 1/2 in. drive",
    "date_added": "3/30/2016",
    "is_available": true
}
    , {
    "tool_name": "Air Compressor",
    "date_added": "7/7/2000",
    "is_available": true
}
    , {
    "tool_name": "Bosh Jigsaw",
    "date_added": "12/8/2018",
    "is_available": false
} ];

const seedTools = () => Tools.bulkCreate(toolList);

module.exports = seedTools;
