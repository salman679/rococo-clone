export default function Header() {
  return (
    <header className="border-b border-slate-800 sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 rounded-lg flex items-center justify-center">
            <img src="./logo-1.png" alt="" />
          </div>
          <span className="text-xl font-bold">Clin</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#solutions"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Our Solutions
          </a>
          <a
            href="#action"
            className="text-gray-300 hover:text-white transition-colors"
          >
            In Action
          </a>
          <a
            href="#technology"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Technology
          </a>
          <a
            href="#benefits"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Benefits
          </a>
          <a
            href="#case-use"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Case Use
          </a>
        </nav>
      </div>
    </header>
  );
}
