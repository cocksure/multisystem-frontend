import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DepartmentList from '../hr/department/DepartmentList';
import EmployeeList from '../hr/employee/EmployeeList';
import PositionList from '../hr/position/PositionList';



function App() {
  return (
    <Routes>
          <Route path="/employees" element={<EmployeeList/>} />
          <Route path="/positions" element={<PositionList/>} />
          <Route path="/departments" element={<DepartmentList/>} />
    </Routes>
  );
}

export default App;
