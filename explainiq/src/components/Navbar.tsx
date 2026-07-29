export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <h1 className="text-2xl font-bold text-blue-600">
        ExplainIQ
      </h1>

      <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
        Sign In
      </button>
    </nav>
  );
}