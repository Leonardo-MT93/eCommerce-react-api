import {  useContext, useState } from "react";
import "./Account.css";
import { LoginContext } from "../context/login";

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
    const {login, loginMessage, responseStatus} = useContext(LoginContext)


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
      login(username, password);
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="username" value={username} onChange={handleUsernameChange}/>
          <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
          <button type="submit">login</button>
          <p className={`message ${loginMessage ? ( responseStatus === 200 ? "success" : "error") : ""}`}>
            {loginMessage ? loginMessage : "Not registered?"}{" "}
            <a href="/create-account">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Account;
