import "./App.css";
import UserProfile from "./components/UserProfile";
import LoginForm from "./components/LoginForm";
import LoginForm2 from "./components/LoginForm2";
import UserProfile2 from "./components/UserProfile2";
import Greeting from "./components/Greeting";
import Greeting2 from "./components/Greeting2";
import UserBio from "./components/UserBio";
import UserBio2 from "./components/UserBio2";
import UserData from "./components/UserData";
import UserData2 from "./components/UserData2";

function App() {
  const user = {
    name: "João Silva",
    // bio: "Desenvolvedor entusiasta de React com experiência em projetos web.",
  };

  return (
    <>
      {/* 1. Não modularizar o código */}
      <UserProfile />
      <UserProfile2 />
      {/* 2. Estrutura de pastas desorganizada */}
      {/* pastas: pages, utils, hooks, componentes de algum nicho */}
      {/* 3. Falta de uso de hooks personalizados */}
      <LoginForm />
      <LoginForm2 />
      {/* 4. Não reestruturar as propriedades */}
      <Greeting name="João" />
      <Greeting2 name="Pedro" />
      {/* 5. Manipulação ineficiente de valores indefinidos */}
      {/* <UserBio user={user} /> */}
      <UserBio2 user={user} />
      {/* 6. Uso incorreto do useEffect */}
      <UserData userId={1} />
      <UserData2 userId={2} />
    </>
  );
}

export default App;
