import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
    addStudent: (studentData) =>
      dispatch({ type: 'ADD_STUDENT', payload: studentData }),
  });

const RegistrationForm = ({ addStudent }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const studentData = {
        };
        addStudent(studentData);
      };

     

const formStyle = {
maxWidth: '500px',
margin: '0 auto',
padding: '20px',
border: '1px solid #ccc',
borderRadius: '5px',
backgroundColor: '#f9f9f9',
boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const labelStyle = {
display: 'block',
fontWeight: 'bold',
marginBottom: '5px',
};

const inputStyle = {
width: '95%',
padding: '10px',
border: '1px solid #ccc',
borderRadius: '5px',    
fontSize: '16px',
marginBottom: '15px',
};

const submitButtonStyle = {
backgroundColor: '#007bff',
color: '#fff',
border: 'none',
borderRadius: '5px',
padding: '10px 20px',
cursor: 'pointer',
};

return (
<div style={formStyle}>
    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registration Form</h2>
    <form action="submit_registration" onSubmit={handleSubmit} method="POST">
    <label style={labelStyle} htmlFor="photos">Photo:</label>
    <input
        style={inputStyle}
        type="file"
        id="photos"
        name="photos"
        multiple
        accept="image/*"
    />

    <label style={labelStyle} htmlFor="firstName">First Name:</label>
    <input style={inputStyle} type="text" id="firstName" name="firstName" required />

    <label style={labelStyle} htmlFor="lastName">Last Name:</label>
    <input style={inputStyle} type="text" id="lastName" name="lastName" required />

    <label style={labelStyle} htmlFor="fatherName">Father's Name:</label>
    <input style={inputStyle} type="text" id="fatherName" name="fatherName" required />

    <label style={labelStyle} htmlFor="email">Email:</label>
    <input style={inputStyle} type="email" id="email" name="email" required />

    <label style={labelStyle} htmlFor="address">Address:</label>
    <textarea style={inputStyle} id="address" name="address" rows="4" required />

    <label style={labelStyle} htmlFor="mobile">Mobile Number:</label>
    <input
        style={inputStyle}
        type="tel"
        id="mobile"
        name="mobile"
        pattern="[0-9]{10}"
        required
    />

    <label style={labelStyle}>Gender:</label>
    <input style={{ marginRight: '10px' }} type="radio" id="male" name="gender" value="Male" />
    <label htmlFor="male">Male</label>
    <input style={{ marginRight: '10px' }} type="radio" id="female" name="gender" value="Female" />
    <label htmlFor="female">Female</label>
    

    <label style={labelStyle} htmlFor="dob">Date of Birth:</label>
    <input style={inputStyle} type="date" id="dob" name="dob" required />

    <label style={labelStyle} htmlFor="country">Country:</label>
    <select style={inputStyle} id="country" name="country" required>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
    </select>

    <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <input style={submitButtonStyle} type="submit" value="Submit" />
    </div>
    </form>
</div>
);
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
