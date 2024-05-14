import React, { useEffect, useState } from "react";

function UserData({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) =>
        console.error("Erro ao buscar dados do usuário:", error)
      );
    // A falta de uma função de limpeza pode levar a efeitos indesejados em caso de desmontagem precoce
  }, [userId]); // Falta considerar o manejo de erros diretamente dentro do efeito

  if (!user) {
    return <p>Carregando dados do usuário...</p>;
  }

  return (
    <div>
      <h1>Dados do Usuário</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserData;
