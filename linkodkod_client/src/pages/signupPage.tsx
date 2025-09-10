// import FormLoginAndSignup from "../components/formLogin&Signup"
// export default function SignupPage(){

//     return(
//         <>
//             <FormLoginAndSignup point="signup"/>
//         </>
//     )
// }
import { useNavigate } from "react-router";
import { signup } from "../util/permission";
import { useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { insertToken } from "../util/localstorege";

type DecodedToken = {
  role: string;
};

export default function Signup() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function log(e: React.FormEvent) {
    e.preventDefault();
    const token = await signup({ name: userName, password:password });
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
      <h1>signup</h1>
      <form onSubmit={log}>
        <input
          type="text"
          placeholder="enter name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}