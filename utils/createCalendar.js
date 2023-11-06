const calendar = require('express');
const calendarLink = require('calendar-link');
require('dotenv').config();


const calendarObj = {
    title: "My tool rental",
    description:"Enjoy your tools and return on the day listed!" ,
    start:"2019-12-29 18:00:00 +0100",
    allDay: true,
    end:"2019-12-29 18:00:00 +0100",
    guests:'',
    url:''
}

//variable to get the current date
var currentDate = {
  function getDate () {
    const day = currentDate.getDate();
    return(day)
  }
}

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });
  
  // Database connection
  // db.connect((err) => {
  //   if (err) {
  //     console.error('Database connection error: ' + err.message);
  //     return;
  //   }
  //   console.log('Connected to the database');
  // });
  
  // update the end date
  function updateEndDate(toolId, rentalPeriodInDays) {
    // Calculate the end date based on the start date and rental period
    const startDate = calendarObj.start;
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + rentalPeriodInDays);
  
    // Update the end date in the database
    const updateQuery = 'UPDATE tools SET end_date = ? WHERE id = ?';
    const values = [endDate, toolId]; 
  
    db.query(updateQuery, values, (err, result) => {
      if (err) {
        console.error('Error updating end date: ' + err.message);
      } else {
        console.log('End date updated successfully.');
      }
    });
  }
  
  // Update the records to use in the calendar invite
  const toolId = 123;
  const rentalPeriodInDays = 7; 
  updateEndDate(toolId, rentalPeriodInDays);