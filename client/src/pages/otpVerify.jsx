import { useState } from "react";
import api from "../utils/api";
import toast from "react-hot-toast";

export default function OtpVerify() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const verify = async () => {
    try {
      const res = await api.post("/auth/verify-otp", { email, otp });
      toast.success(res.data.message || "Logged in!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light">
      <div className="bg-white p-8 rounded-xl w-96 shadow">
        <h2 className="text-xl font-bold text-primary mb-4">Verify OTP</h2>
        <input
          className="w-full border p-2 rounded mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded mb-4"
          placeholder="OTP"
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={verify} className="w-full bg-success text-white py-2 rounded">
          Verify
        </button>
      </div>
    </div>
  );
}
