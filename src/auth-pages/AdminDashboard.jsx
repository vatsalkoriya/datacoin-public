import React, { useState, useEffect } from 'react';
import api from '../services/api';
import UserList from '../components/Admin/UserList';
import "./UserList.css"
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get('/users');
        setUsers(data);
      } catch (error) {
        console.error(error.response.data);
      }
    };
    fetchUsers();
  }, []);

  const handleBlockToggle = async (id) => {
    try {
      const { data } = await api.put(`/users/${id}/block`);
      setUsers(
        users.map((user) =>
          user._id === id ? { ...user, isBlocked: data.isBlocked } : user
        )
      );
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await api.delete(`/users/${id}`);
        setUsers(users.filter((user) => user._id !== id));
      } catch (error) {
        console.error(error.response.data);
      }
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <UserList
        users={users}
        handleBlockToggle={handleBlockToggle}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default AdminDashboard;