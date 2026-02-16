import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact & Feedback
        </h1>
        <p className="text-gray-600 mt-2">
          Have questions or want to book a room? Reach out to us anytime.
        </p>
      </div>

      {/* MAIN */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-8">
        {/* LEFT — FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <textarea
              placeholder="Message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT — HOTEL DETAILS */}
        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-5">
          <h2 className="text-xl font-semibold text-gray-800">Hotel Details</h2>

          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-green-700" />
            <span>hotel@example.com</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaPhoneAlt className="text-green-700" />
            <span>+91 96466 16601</span>
          </div>

          <div className="flex items-start gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-green-700 mt-1" />
            <span>Shimla, Himachal Pradesh, India</span>
          </div>

          <a
            href="https://maps.app.goo.gl/Y8dP8ScGSfSRiC2Y9"
            target="_blank"
            className="text-green-700 font-medium hover:underline block"
          >
            Open in Google Maps
          </a>

          {/* WHATSAPP BOOK */}
          <a
            href="https://wa.me/919646616601?text=Hi%20I%20want%20to%20book%20a%20room"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold"
          >
            <FaWhatsapp />
            Book on WhatsApp
          </a>
        </div>
      </div>

      {/* MAP */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <iframe
            title="Hotel Location"
            src="https://maps.google.com/maps?q=30.8667464,77.0746534&z=15&output=embed"
            className="w-full h-[350px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
