import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import UserList from './components/UserList';
import './App.css';

// Componente Principal App
export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca usuários iniciais da API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const formattedUsers = data.slice(0, 5).map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone
        }));
        setUsers(formattedUsers);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar usuários:', error);
        setLoading(false);
      });
  }, []);

  const handleAddUser = (newUser) => {
    setUsers(prev => [newUser, ...prev]);
  };

  const handleRemoveUser = (userId) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Sistema de Cadastro de Usuários</h1>
        <p>Gerencie usuários de forma simples e eficiente</p>
      </header>

      <main className="main-content">
        <Form onAddUser={handleAddUser} />
        
        {loading ? (
          <div className="loading">Carregando usuários...</div>
        ) : (
          <UserList users={users} onRemove={handleRemoveUser} />
        )}
      </main>

      <footer className="footer">
        <p>Desenvolvido com React - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
