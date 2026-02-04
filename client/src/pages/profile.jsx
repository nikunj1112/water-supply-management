import { useEffect, useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/auth/check-login");
        if (res.data.loggedIn) {
          setUser(res.data.user);
        } else {
          toast.error("Please login first");
        }
      } catch {
        toast.error("Failed to load profile");
      }
    };
    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light flex items-center justify-center px-6">
      <div className="bg-white rounded-xl shadow p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-primary mb-4">👤 Profile</h2>
        <div className="space-y-3">
          <ProfileRow label="User ID" value={user.id} />
          <ProfileRow label="Email" value={user.email} />
        </div>
      </div>
    </div>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="flex justify-between bg-light rounded p-3">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-dark">{value}</span>
    </div>
  );
}
