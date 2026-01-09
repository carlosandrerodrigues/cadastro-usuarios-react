import React from 'react';
import UserCard from './UserCard';

// Componente UserList
const UserList = ({ users, onRemove }) => {
  if (users.length === 0) {
    return (
      <div className="empty-state">
        <p>Nenhum usuário cadastrado ainda.</p>
        <p>Adicione o primeiro usuário usando o formulário acima!</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      <h2>Usuários Cadastrados ({users.length})</h2>
      <div className="user-grid">
        {users.map(user => (
          <UserCard 
            key={user.id} 
            user={user} 
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
