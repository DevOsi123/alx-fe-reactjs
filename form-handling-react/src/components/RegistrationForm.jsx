import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(""); // plural 'errors'

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username is required");
      return;
    }
    if (!email) {
      setErrors("Email is required");
      return;
    }
    if (!password) {
      setErrors("Password is required");
      return;
    }

    setErrors("");
    console.log("User Registered:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register (Controlled)</h2>

      {errors && <p style={{ color: "red" }}>{errors}</p>}

      <input type="text" name="username" value={username} placeholder="Username" onChange={e=>setUsername(e.target.value)} />
      <input type="email" name="email" value={email} placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" name="password" value={password} placeholder="Password" onChange={e=>setPassword(e.target.value)} />

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
