const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "docker_container_name",
  user: "root",
  password: "password",
  database: "database_name"
  });
  
connection.connect(function(err) {
  if (err) {
      console.log(err);
  } else {
      console.log("Connected to database");
  }
  });


app.post('/api/students', (req, res) => {
  const { name, grade, number, course } = req.body;
  
  const sql = 'INSERT INTO students (name, grade, number, course) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, grade, number, course], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    console.log('Student data inserted successfully');
    res.json({ success: true, message: 'Student data inserted successfully' });
  });
});


app.post('/api/faculty', (req, res) => {
  const { name, id, number, subject } = req.body;
  
  const sql = 'INSERT INTO faculty (name, id, number, subject) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, id, number, subject], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    console.log('Student data inserted successfully');
    res.json({ success: true, message: 'Student data inserted successfully' });
  });
});


app.get('/api/students', (req, res) => {
  const sql = 'SELECT * FROM students';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    res.json({ success: true, students: results });
  });
});

app.get('/api/faculty', (req, res) => {
  const sql = 'SELECT * FROM faculty';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    res.json({ success: true, faculty: results });
  });
});


app.put('/api/students/:name', (req, res) => {
  const { grade, number, course } = req.body;
  const { name } = req.params;

  const sql = 'UPDATE students SET grade = ?, number = ?, course = ? WHERE name = ?';
  connection.query(sql, [grade, number, course, name], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    console.log('Student data updated successfully');
    res.json({ success: true, message: 'Student data updated successfully' });
  });
});

app.put('/api/faculty/:name', (req, res) => {
  const { id, number, subject } = req.body;
  const { name } = req.params;

  const sql = 'UPDATE faculty SET id = ?, number = ?, subject = ? WHERE name = ?';
  connection.query(sql, [id, number, subject, name], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    console.log('Faculty data updated successfully');
    res.json({ success: true, message: 'Faculty data updated successfully' });
  });
});



app.delete('/api/students/:name', (req, res) => {
  const { name } = req.params;

  const sql = 'DELETE FROM students WHERE name = ?';
  connection.query(sql, [name], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    console.log('Student data deleted successfully');
    res.json({ success: true, message: 'Student data deleted successfully' });
  });
});


app.delete('/api/faculty/:name', (req, res) => {
  const { name } = req.params;

  const sql = 'DELETE FROM faculty WHERE name = ?';
  connection.query(sql, [name], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    console.log('Faculty data deleted successfully');
    res.json({ success: true, message: 'Faculty data deleted successfully' });
  });
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// CREATE TABLE students (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(100) NOT NULL,
//   grade INT NOT NULL,
//   number VARCHAR(20) NOT NULL,
//   course TEXT NOT NULL
// );


// CREATE TABLE faculty (
//   name VARCHAR(100) NOT NULL,
//   id INT NOT NULL,
//   number VARCHAR(20) NOT NULL,
//   subject TEXT NOT NULL
// );








// app.delete('/api/students/:name', (req, res) => {
//   const { name } = req.params;

//   const sql = 'DELETE FROM students WHERE name = ?';
//   connection.query(sql, [name], (err, result) => {
//     if (err) {
//       console.error('Error executing SQL query:', err);
//       res.status(500).json({ success: false, message: 'Internal Server Error' });
//       return;
//     }
//     console.log('Student data deleted successfully');
//     res.json({ success: true, message: 'Student data deleted successfully' });
//   });
// });


// app.delete('/api/faculty/:name', (req, res) => {
//   const { name } = req.params;

//   const sql = 'DELETE FROM faculty WHERE name = ?';
//   connection.query(sql, [name], (err, result) => {
//     if (err) {
//       console.error('Error executing SQL query:', err);
//       res.status(500).json({ success: false, message: 'Internal Server Error' });
//       return;
//     }
//     console.log('Faculty data deleted successfully');
//     res.json({ success: true, message: 'Faculty data deleted successfully' });
//   });
// });

// based on the above code give me the react web page code named Delete.jsx which will delete the student and faculty details based on the name of the student or faculty where we have two input fields and a button to delete the details of the student or faculty based on the name of the student or faculty.
// The code should be written in the frontend/src/Delete.jsx file.
// The code should be written in the frontend/src/Delete.jsx file.

// The code should be written in the frontend/src/Delete.jsx file.
