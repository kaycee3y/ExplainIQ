export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white">
      <div className="text-2xl font-bold text-blue-600">
        ExplainIQ
      </div>

      <div className="flex gap-6 text-gray-600">
        <a href="#">How it works</a>
        <a href="#">Features</a>
        <a href="#">About</a>
      </div>

      <button className="rounded-full bg-blue-600 px-6 py-2 text-white font-semibold">
        Get Started
      </button>
    </nav>
  );
}