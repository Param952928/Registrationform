// import React from 'react';

import { Link } from 'react-router-dom';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Button } from '@mui/material';
import { connect } from 'react-redux'; 

const mapStateToProps = (state) => ({
  students: state.students,
});

const StudentList = ({ students }) => {
 
  return (
    <div>
      <h2>Student List</h2>
      <Link to="/registration-form">
        <Button variant="contained" color="primary">Add Student</Button>
      </Link>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              {/* Add other table headers here */}
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.id}</TableCell>
                <TableCell>
                  <Link to={`/student/${student.id}`}>{student.name}</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default connect(mapStateToProps)(StudentList)
