import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.state?.token;

  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }

    const savedUsername = localStorage.getItem("username") || "Alba";
    const savedPosition = localStorage.getItem("position") || "Developer";

    setUsername(savedUsername);
    setPosition(savedPosition);
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("position", position);
    alert("Profile updated!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 py-8">
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 max-w-sm md:max-w-md w-full text-center animate-fade-in relative">
        <div className="flex flex-col items-center gap-2 md:gap-4">
          {/* Avatar */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-white shadow-md">
            {username[0]?.toUpperCase() || "A"}
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Welcome, {username}!
          </h2>
          <p className="text-sm md:text-base text-gray-500">Position: {position}</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-4 w-full text-left space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Position</label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
            >
              Update Profile
            </button>
          </form>

          {/* Token Display */}
          <div className="mt-6 w-full text-left">
            <p className="text-xs font-semibold text-gray-600 mb-1">
              Your Auth Token:
            </p>
            <div className="bg-gray-100 text-xs break-all text-blue-700 font-mono p-3 rounded border border-gray-200">
              {token}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => navigate("/")}
            className="mt-4 px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
