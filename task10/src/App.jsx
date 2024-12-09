import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood');
                const data = await response.json();
                setUsers(data);
                setFilteredUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        filterUsers(value, departmentFilter);
    };

    const handleDepartmentFilter = (e) => {
        const value = e.target.value;
        setDepartmentFilter(value);
        filterUsers(searchTerm, value);
    };

    const filterUsers = (search, department) => {
        let filtered = users;

        if (search) {
            filtered = filtered.filter(user =>
                user.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (department) {
            filtered = filtered.filter(user => user.department === department);
        }

        setFilteredUsers(filtered);
    };

    return (
        <div className="user-list">
            <div className="filters">
                <input
                    type="text"
                    placeholder="Ad üzrə axtarış..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />
                <select
                    value={departmentFilter}
                    onChange={handleDepartmentFilter}
                    className="department-select"
                >
                    <option value="">Bütün şöbələr</option>
                    <option value="Management">Management</option>
                    <option value="Recruitment">Recruitment</option>
                    <option value="Security">Security</option>
                </select>
            </div>
            <ul className="user-list-items">
                {filteredUsers.map(user => (
                    <li key={user.id} className="user-item">
                        <h3>{user.name}</h3>
                        <p>Şöbə: {user.department}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;