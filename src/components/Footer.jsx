const footerConfig = {
  id: "business-footer-1",
  phoneLabel: "Contact us",
  phone: "+91 0123456789",
  whatsapp: "+91 0123456789", // Same or different number
  emailLabel: "Email",
  email: "starxinnovation@gmail.com",
  company: "StarX Innovations and IT Solution",
};

export default function Footer() {
  const whatsappUrl = `https://wa.me/${footerConfig.whatsapp.replace(
    /\D/g,
    ""
  )}`;

  return (
    <footer className="w-full bg-[#1f1f1f] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-4">
        <p className="text-lg">
          📞 {footerConfig.phoneLabel}:{" "}
          <span className="text-white">{footerConfig.phone}</span>
        </p>

        <p className="text-sm flex flex-col sm:flex-row items-center justify-center gap-2">
          💬 WhatsApp:{" "}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 underline text-white/90 hover:no-underline transition-colors"
          >
            {footerConfig.whatsapp}
          </a>
        </p>

        <p className="text-sm">
          ✉️ {footerConfig.emailLabel}:{" "}
          <span className="text-white">{footerConfig.email}</span>
        </p>

        <hr className="border-gray-600 my-4" />

        <p className="text-xs">
          © {new Date().getFullYear()} {footerConfig.company}. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
