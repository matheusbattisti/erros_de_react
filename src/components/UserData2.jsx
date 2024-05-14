import React, { useEffect, useState } from "react";

function UserData2({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error("Falha ao buscar dados do usuário");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        setUser(null);
      }
    };

    fetchUser();

    return () => {
      console.log("Componente UserData está sendo desmontado");
      // A função de limpeza ajuda a gerenciar o estado de desmontagem do componente
    };
  }, [userId]); // Uso adequado das dependências para re-executar o efeito quando o userId muda

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

export default UserData2;
