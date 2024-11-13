const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '1234',
  database: 'your_database_name',
  port: 3306
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();

  // Get form data
  const username = document.getElementById('username').value;
  const password = document.getElementById('password-input').value;

  // Insert data into the database
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(query, [username, password], (err, result) => {
    if (err) throw err;
    console.log(`${result.affectedRows} row(s) inserted`);
    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('password-input').value = '';
  });
};

// Add event listener to the form
document.getElementById('sign-in-form').addEventListener('submit', handleFormSubmit);