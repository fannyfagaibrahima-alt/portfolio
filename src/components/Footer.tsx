export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 text-sm font-mono">
          <span className="text-cyber-green">{">"}</span> Designed & built with{" "}
          <span className="text-cyber-red">♥</span> and{" "}
          <span className="text-cyber-green">sudo</span> privileges
        </p>
        <p className="text-gray-700 text-xs mt-2">
          © {new Date().getFullYear()} CyberSec Portfolio | All rights reserved
        </p>
      </div>
    </footer>
  );
}
