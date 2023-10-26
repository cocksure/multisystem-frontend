import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../../general/list';
import axios from 'axios';

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    axios
      .get('http://localhost:8000/api/hr/employees/')
      .then((response) => {
        setEmployees(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  };

  const handleEmployeeClick = (employee) => {
    navigate(`/employees/${employee.id}`);
  };

  const columnsForEmployeeList = ['full_name', 'department', 'position', 'report_card', 'badge_number',
  'date_of_hire', 'phone_number', 'email',];

  return (
    <div>
      <h1>Employee List</h1>
      <List items={employees} onItemClick={handleEmployeeClick} columns={columnsForEmployeeList} />
    </div>
  );
};

export default EmployeeList;
