import React from 'react';
import { Table } from 'react-bootstrap';
import { FaPencilAlt, FaTrash, FaEye } from 'react-icons/fa';

function List({ items, onItemClick, columns, onEdit, onDelete, onViewDetails }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            {columns.map((column, index) => (
              <td key={index}>{item[column]}</td>
            ))}
            <td>
              <button onClick={() => onEdit(item)}>
                <FaPencilAlt />
              </button>
              <button onClick={() => onDelete(item)}>
                <FaTrash />
              </button>
              <button onClick={() => onViewDetails(item)}>
                <FaEye />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default List;
