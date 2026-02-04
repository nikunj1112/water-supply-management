import { useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/signin", { email, password });
      toast.success(res.data.message || "OTP sent!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Signin failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl w-96 shadow">
        <h2 className="text-2xl font-bold text-primary mb-4">Sign In</h2>
        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full border p-2 rounded mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-primary text-white py-2 rounded hover:bg-secondary">
          Send OTP
        </button>
      </form>
    </div>
  );
}
