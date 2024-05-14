import CustomButton from "./CustomButton";

function UserProfile2() {
  return (
    <div>
      <p>Nome: João Silva</p>
      <p>Email: joao.silva@example.com</p>
      <CustomButton
        className="meu-botao-estilizado"
        style={{ fontSize: "20px", padding: "10px 20px" }}
      >
        Clique Aqui
      </CustomButton>
    </div>
  );
}

export default UserProfile2;
