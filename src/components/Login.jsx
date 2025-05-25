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
      localStorage.setItem("jwtToken", token);

      console.log("Login berhasil. Token:", token);
      navigate("/profile", { state: { token } });
    } catch (err) {
      console.error("Login error:", err);
      setError("Login gagal. Periksa kembali email dan password.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 py-8">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm animate-fade-in relative"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <div className="mb-4">
          <label className="block mb-1 font-semibold text-sm">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="eve.holt@reqres.in"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-semibold text-sm">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded text-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="bebas"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-500 transition"
        >
          Login
        </button>

        {/* Optional: Close Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          aria-label="Close"
        >
          &times;
        </button>
      </form>
    </div>
  );
};

export default Login;
