import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import List from '../../general/list';
import axios from 'axios';

function PositionList() {
    const navigate = useNavigate();
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        fetchPositions();
    }, []);

    function fetchPositions() {
        axios
            .get('http://localhost:8000/api/hr/positions/')
            .then((response) => {
                setPositions(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching positions:', error);
            });
    };

    function handlePositionClick(position) {
        navigate(`/positions/${position.id}`);
    };

    const columnsForPositionList = ['name'];

    return (
        <div>
            <h1>Position List</h1>
            <List items={positions} onItemClick={handlePositionClick} columns={columnsForPositionList}/>
        </div>
    );
}

export default PositionList;
