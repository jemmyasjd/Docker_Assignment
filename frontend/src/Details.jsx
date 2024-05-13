import { useEffect, useState } from 'react';
import axios from 'axios';
// import './App.css';

function Details() {
  const [students, setStudents] = useState([]);
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data.students);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    const fetchFaculty = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/faculty');
        setFaculty(response.data.faculty);
      } catch (error) {
        console.error('Error fetching faculty data:', error);
      }

 
  }
  fetchStudents();
  fetchFaculty();}, []);


  return (
    <div >
      <div>
        <h2>Students</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <p>Name: {student.name}</p>
              <p>Grade: {student.grade}</p>
              <p>Roll Number: {student.number}</p>
              <p>Courses: {student.course}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Faculty</h2>
        <ul>
          {faculty.map((faculty) => (
            <li key={faculty.id}>
              <p>Name: {faculty.name}</p>
              <p>Id: {faculty.id}</p>
              <p>Number: {faculty.number}</p>
              <p>Subject: {faculty.subject}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;