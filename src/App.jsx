import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Profile from "./pages/Profile"; // ✅ fix di sini
import Home from "./pages/Home"; // opsional jika ada halaman utama

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirect fallback */}
      </Routes>
    </Router>
  );
}

export default App;
