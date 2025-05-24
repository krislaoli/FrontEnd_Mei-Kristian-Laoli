import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function IsLogged({ children }) {
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
      return children;
    }
    return <Navigate to="/login" />;
  }

  function IsNotLogged({ children }) {
    const jwtToken = localStorage.getItem("jwtToken");

    if (!jwtToken) {
      return children;
    }
    return <Navigate to="/" />;
  }

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<IsLogged><Home /></IsLogged>} />
        <Route path="/login" element={<IsNotLogged><Login /></IsNotLogged>} />
        <Route path="/profile" element={<IsLogged><Profile /></IsLogged>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
