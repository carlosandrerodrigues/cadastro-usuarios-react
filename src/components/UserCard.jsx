// Componente UserCard
const UserCard = ({ user, onRemove }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <h3>{user.name}</h3>
        <p className="user-email">✉️ {user.email}</p>
        <p className="user-phone">📱 {user.phone}</p>
      </div>
      <button 
        onClick={() => onRemove(user.id)} 
        className="btn-remove"
        aria-label="Remover usuário"
      >
        Remover
      </button>
    </div>
  );
};

export default UserCard;
