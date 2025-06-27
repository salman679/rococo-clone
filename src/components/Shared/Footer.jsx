export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-4">
      <div className="container mx-auto flex justify-between items-center text-gray-400 text-sm">
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition-colors">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
        <div>© 2025 Clin Technologies. All rights reserved.</div>
      </div>
    </footer>
  );
}
