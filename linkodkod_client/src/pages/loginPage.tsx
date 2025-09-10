import { useNavigate } from "react-router";
import { login } from "../util/permission";
import { useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { insertToken } from "../util/localstorege";
import "../syles/pagesStyle/login&signupStyle.css"

type DecodedToken = {
  role: string;
};

export default function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function log(e: React.FormEvent) {
    e.preventDefault();
    const token = await login({ name: userName, password:password });
    if (token) {
      insertToken(token,"authToken")
      const decoded: DecodedToken = jwtDecode(token);
      if (decoded.role === 'user') {
        navigate("/home");
      }
    } else {
      alert("Login failed");
    }
  }

  return (
    <>
      <h1 className="authHeader">Login</h1>
      <form id="authForm" onSubmit={log}>
        <input className="authForm"
          type="text"
          placeholder="enter name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input className="authForm"
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="authForm" type="submit">submit</button>
      </form>
    </>
  );
}
