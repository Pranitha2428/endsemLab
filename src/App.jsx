
import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [student, setStudent] = useState(null);

  const login = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setMessage("Login Successfull");
    } else {
      setMessage("Invalid Username or Password");
    }
  };

  const register = (e) => {
    e.preventDefault();
    setStudent({ id, name, email });
  };

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => {
          setPage("login");
          setMessage("");
        }}>
          Login
        </button>

        <button onClick={() => {
          setPage("register");
          setStudent(null);
        }}>
          Registration
        </button>
      </div>

      {page === "login" ? (
        <form onSubmit={login}>
          <h2>Login Page</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          <p>{message}</p>
        </form>
      ) : (
        <form onSubmit={register}>
          <h2>Student Registration</h2>

          <input
            type="text"
            placeholder="Student ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Submit</button>

          {student && (
            <div className="details">
              <h3>Student Details</h3>
              <p>ID: {student.id}</p>
              <p>Name: {student.name}</p>
              <p>Email: {student.email}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default App;
