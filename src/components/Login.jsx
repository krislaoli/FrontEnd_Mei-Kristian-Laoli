import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email !== "eve.holt@reqres.in") {
      setError("Email harus 'eve.holt@reqres.in'");
      return;
    }

    try {
      const res = await axios.post(
        "https://reqres.in/api/login",
        { email, password },
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );

      const token = res.data.token;

      localStorage.setItem("jwtToken", token)

      console.log("Login berhasil. Token:", token); // ✅ log token
      navigate("/profile", { state: { token } });
    } catch (err) {
      console.error("Login error:", err); // ✅ log error
      setError("Login gagal. Periksa kembali email dan password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="eve.holt@reqres.in"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="bebas"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
