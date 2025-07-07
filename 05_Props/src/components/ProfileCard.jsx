import React from 'react';

const ProfileCard = ({ name, age, gender, dob, designation }) => {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Date of Birth:</strong> {dob}</p>
      <p><strong>Designation:</strong> {designation}</p>
    </div>
  );
};

const styles = {
  card: {
    width: '300px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
    color:'black'
  },

};

export default ProfileCard;
