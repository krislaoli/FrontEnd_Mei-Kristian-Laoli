import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const token = location.state?.token;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-yellow-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center animate-fade-in">
        <div className="flex flex-col items-center gap-4">
          {/* Avatar Placeholder */}
          <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-white shadow-md">
            A
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800">Welcome, Alba!</h2>
          <p className="text-sm text-gray-500">
            You're successfully logged in ✨
          </p>

          {/* Token Display */}
          <div className="mt-6 w-full text-left">
            <p className="text-xs font-semibold text-gray-600 mb-2">
              Your Auth Token:
            </p>
            <div className="bg-gray-100 text-xs break-all text-blue-700 font-mono p-3 rounded border border-gray-200">
              {token || "Token tidak ditemukan"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
