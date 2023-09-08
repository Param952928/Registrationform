// src/StudentDetails.js

import React from 'react';
import { connect } from 'react-redux';

const StudentDetails = ({ student }) => {
  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      {/* Add other student details */}
    </div>
  );
};

// Define mapStateToProps to access Redux state
const mapStateToProps = (state, ownProps) => ({
  student: state.students.find((s) => s.id === parseInt(ownProps.match.params.id)),
});

export default connect(mapStateToProps)(StudentDetails);
