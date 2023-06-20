import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [userConnected, setUserConnected] = useState(JSON.parse(localStorage.getItem("userConnected")) || null);
  const [loginMessage, setLoginMessage] = useState("");
  const [responseStatus, setResponseStatus] = useState(null);
  const login = async (username, password) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      setResponseStatus(response.status);
      if (response.ok) {
        // El inicio de sesión fue exitoso
        setLoginMessage("Inicio de sesión exitoso");
        setUserConnected({username, password})
        localStorage.setItem("userConnected", JSON.stringify({username, password}))
        // Redirigir al usuario al home después de 2 segundos

        setTimeout(() => {
          window.location.href = "/home"; // Cambia "/home" por la ruta de tu página de inicio
        }, 2000);
      } else {
        // El inicio de sesión falló
        setLoginMessage("Inicio de sesión fallido");
      }
    } catch (error) {
      console.error("Error al realizar el inicio de sesión:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("userConnected")
    setUserConnected(null)
    window.location.href = "/"
  }

  return (
    <LoginContext.Provider
      value={{
        userConnected,
        setUserConnected,
        login,
        loginMessage,
        responseStatus,
        logout
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
