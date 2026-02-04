import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import FirstPage from "./pages/firstPage";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile";
import OtpVerify from "./pages/otpVerify";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/otp" element={<OtpVerify />} />
      </Routes>
    </BrowserRouter>
  );
}
