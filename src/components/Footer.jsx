export default function Footer() {
  return (
    <footer className="w-full bg-[#1f1f1f] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        
        <p className="text-lg">
          📞 Contact us: <span className="text-white">+91 0123456789</span>
        </p>

        <p className="text-sm">
          ✉️ Email: <span className="text-white">starxinnovation@gmail.com</span>
        </p>

        <hr className="border-gray-600 my-4" />

        <p className="text-xs">
          © {new Date().getFullYear()} StarX Innovations and IT Solution. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
