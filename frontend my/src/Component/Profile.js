import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Legend, Cell } from 'recharts';
import '../Css/profile.css';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [demos, setDemos] = useState([]);
  const [forms, setForms] = useState([]);
  const [contacts, setContacts] = useState([]);

  const navigate = useNavigate(); // Initialize navigate hook

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:5000/api/demos')
      .then(response => setDemos(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:5000/api/forms')
      .then(response => setForms(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:5000/api/contacts')
      .then(response => setContacts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDeleteUser = async (user) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${user._id}`);
      setUsers(users.filter(u => u._id !== user._id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteDemo = async (demo) => {
    try {
      await axios.delete(`http://localhost:5000/api/demos/${demo._id}`);
      setDemos(demos.filter(u => u._id !== demo._id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteForm = async (form) => {
    try {
      await axios.delete(`http://localhost:5000/api/forms/${form._id}`);
      setForms(forms.filter(u => u._id !== form._id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteContact = async (contact) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${contact._id}`);
      setContacts(contacts.filter(u => u._id !== contact._id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Users</h1>
      
      {/* Home Button */}
      <button className="button delete-button" style={{backgroundColor:'lightseagreen'}} onClick={() => navigate('/')}>
        Home
      </button>

      <div className="table-container">
        {/* Users Table */}
        <table className="profile-table" border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteUser(user)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Contacts Table */}
        <table className="profile-table" border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.subject}</td>
                <td>{contact.comment}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteContact(contact)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        {/* Demos Table */}
        <table className="profile-table" border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>Course</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {demos.map(demo => (
              <tr key={demo._id}>
                <td>{demo.name}</td>
                <td>{demo.mobileno}</td>
                <td>{demo.email}</td>
                <td>{demo.course}</td>
                <td>{demo.city}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteDemo(demo)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Forms Table */}
        <table className="profile-table" border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Department</th>
              <th>Name</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>State</th>
              <th>City</th>
              <th>Gym</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {forms.map(form => (
              <tr key={form._id}>
                <td>{form.department}</td>
                <td>{form.name}</td>
                <td>{form.mobilno}</td>
                <td>{form.email}</td>
                <td>{form.state}</td>
                <td>{form.city}</td>
                <td>{form.gym}</td>
                <td>{form.comment}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteForm(form)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Charts Section */}
      <h1 className="profile-heading">Charts</h1>
      <div className="chart-container">
        {/* BarChart for Users */}
        <BarChart width={500} height={300} data={users}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="email.length" fill="#8884d8" />
        </BarChart>

        {/* BarChart for Contacts */}
        <BarChart width={500} height={300} data={contacts}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Bar dataKey="email.length" fill="#82ca9d" />
        </BarChart>

        {/* PieChart for Users */}
        <PieChart width={400} height={400}>
          <Pie
            data={users}
            dataKey="email.length"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {users.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>

        {/* PieChart for Demos */}
        <PieChart width={400} height={400}>
          <Pie
            data={demos}
            dataKey="mobileno.length"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#82ca9d"
            label
          >
            {demos.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Profile;
