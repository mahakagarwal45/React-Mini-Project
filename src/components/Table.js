
import React from 'react';
import './Table.css';

const TableComponent = () => {
  const data = [
    { id: 1, Projects: 'Waste2Best', role: 'Developer', Technologies: 'React.js, CSS', status: 'Active' },
    { id: 2, Projects: 'HealthyVibes', role: 'Developer', Technologies: 'HTML, CSS, Javascript', status: 'Inactive' },
    { id: 3, Projects: 'CareZone', role: 'Developer', Technologies: 'HTML, CSS', status: 'Active' },

  ];

  return (
    <div className="table-container">
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Projects</th>
            <th>Role</th>
            <th>Technologies</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map(member => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.Projects}</td>
              <td>{member.role}</td>
              <td>{member.Technologies}</td>
              <td>{member.status}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
      <h1 className="add"><button>Add more...</button></h1>
    </div>
  );
};

export default TableComponent;
