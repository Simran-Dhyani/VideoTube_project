//import {Link} from "react-router-dom"
function Landing() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-slate-800">
        <h1 className="text-2xl font-bold">Learnify</h1>

        <div className="space-x-4">
          <a href="/login" className="px-4 py-2 bg-slate-800 rounded-lg">
            Login
          </a>
          <a href="/register" className="px-4 py-2 bg-blue-600 rounded-lg">
            Sign Up
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Learn Smarter with Videos + Notes
        </h2>

        <p className="text-gray-400 max-w-xl mb-6">
          Watch educational videos, take structured notes, and enhance your
          learning with AI — all in one place.
        </p>

        <a
          href="/register"
          className="bg-blue-600 px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section className="mt-20 px-6 grid md:grid-cols-3 gap-6">

        <div className="bg-slate-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🎥 Video Learning</h3>
          <p className="text-gray-400">
            Watch curated educational content in one place.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">📝 Smart Notes</h3>
          <p className="text-gray-400">
            Take notes linked directly to video timestamps.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-2">🤖 AI Assistance</h3>
          <p className="text-gray-400">
            Improve notes and ask questions instantly.
          </p>
        </div>

      </section>

      {/* CTA Section */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Start Learning Smarter Today
        </h2>

        <a
          href="/register"
          className="bg-blue-600 px-6 py-3 rounded-xl text-lg"
        >
          Join Now
        </a>
      </section>

    </div>
  );
}

export default Landing;