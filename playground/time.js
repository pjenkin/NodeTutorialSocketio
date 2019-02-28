const moment = require('moment');

// let date = new Date();
// console.log(date.getMonth());

let date = moment();
date.add(1, 'year');
console.log(date.format('MMM Do YYYY'));

// 10:35 am - challenge 9-117 format time like this


console.log(date.format('h:mm a'));   // NB mm padded minute but not padded hour
console.log(date.add(32,'minute').format('h:mm a'));


let someTimestamp = moment().valueOf();
console.log(someTimestamp);   // NB mm padded minute but not padded hour


let createdAt = 1234;
date = moment(createdAt);
console.log(date.format('h:mm a'));   // NB mm padded minute but not padded hour
