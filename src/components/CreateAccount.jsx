import { useState } from "react";
import "./Account.css";

export const CreateAccount = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const register = async () => {
            try {
              const response = await fetch("https://dummyjson.com/users/add", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, email, password })
              });
      
              if (response.ok) {
                // El inicio de sesión fue exitoso
                console.log("Registro de usuario exitoso");
                // Redirigir al usuario al home después de 2 segundos
                setTimeout(() => {
                  window.location.href = "/account"; 
                }, 2000);
              } else {
                // El inicio de sesión falló
                console.log("Registro de usuario fallido");
              }
            } catch (error) {
              console.error("Error al realizar el inicio de sesión:", error);
            }
          };
      
          register();
    }

  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="name" value={username} onChange={handleUsernameChange}/>
          <input type="text" placeholder="email address" value={email} onChange={handleEmailChange}/>
          <input type="password" placeholder="password"  value={password} onChange={handlePasswordChange}/>
          <button>create</button>
          <p className="message">
            Already registered? <a href="/account">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
};
