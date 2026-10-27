const fs = require('fs');
const path = require('path');

// Read the READ.ME file
const filePath = path.join(__dirname, '..', 'READ.ME');
const content = fs.readFileSync(filePath, 'utf8');

// Count the lines
const lines = content.split('\n').length;

// Print the count
console.log(lines);
