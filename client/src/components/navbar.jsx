import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-dark text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-info">Home</Link>
        <Link to="/signin" className="hover:text-info">Signin</Link>
        <Link to="/signup" className="hover:text-info">Signup</Link>
        <Link to="/profile" className="hover:text-info">Profile</Link>
      </div>
    </nav>
  );
}
