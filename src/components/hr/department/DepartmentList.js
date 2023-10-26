import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import List from '../../general/list';
import axios from 'axios';

const DepartmentList = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = () => {
    axios
      .get('http://localhost:8000/api/hr/departments/')
      .then((response) => {
        setDepartments(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching departments:', error);
      });
  };

  const handleDepartmentClick = (department) => {
    navigate(`/departments/${department.id}`);
  };

  const columnsForDepartmentList = ['name', 'amount_of_employee'];

  return (
    <div>
      <h1>Department List</h1>
      <List items={departments} onItemClick={handleDepartmentClick} columns={columnsForDepartmentList} />
    </div>
  );
};

export default DepartmentList;
