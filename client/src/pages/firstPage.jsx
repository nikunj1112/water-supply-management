import { Link } from "react-router-dom";

export default function FirstPage() {
  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Secure Auth Platform 🔐
        </h1>
        <p className="text-gray-300 max-w-xl mb-6">
          Login with OTP, manage your profile, and visualize your data with a
          beautiful dashboard.
        </p>

        <div className="flex gap-4">
          <Link
            to="/signup"
            className="px-6 py-3 rounded-lg bg-primary hover:bg-secondary transition"
          >
            Get Started
          </Link>
          <Link
            to="/signin"
            className="px-6 py-3 rounded-lg bg-info hover:opacity-90 transition"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-light text-dark py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <Feature title="OTP Login" desc="Secure two-step authentication" />
          <Feature title="Profile" desc="Manage your account details" />
          <Feature title="Dashboard" desc="Visualize insights with charts" />
        </div>
      </section>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 text-center">
      <h3 className="font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
