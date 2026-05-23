import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/917498645883"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition hover:scale-110"
    >
      <MessageCircle size={24} />

      <span className="hidden sm:block font-medium">
        Chat on WhatsApp
      </span>
    </a>
  );
}