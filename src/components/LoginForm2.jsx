import React from "react";
import useForm from "../hooks/useForm";

function LoginForm2() {
  const [formValues, handleInputChange] = useForm({ email: "", password: "" });

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(formValues); // Lógica de login
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm2;
