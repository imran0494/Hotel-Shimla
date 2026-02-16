import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import HeroCarousel from "./components/HeroCarousel";
import RoomCard from "./components/RoomCard";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { rooms } from "./assets/data/rooms";
import mapIcon from "./assets/map.png";
import About from "./components/About";

export default function App() {
  const hotelPhone = "919646616601";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <header className="bg-[#1a8a5d] backdrop-blur-md shadow-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-semibold tracking-wide text-white
 hover:text-amber-300 transition"
          >
            Hotel <span className="text-amber-300">Shimla</span>
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-10 text-sm font-medium 
          bg-[#173F2F] text-white pl-8 px-2 py-2 rounded-full shadow-lg border border-white/10"
          >
            <Link to="/" className="group  transition">
              <AnimatedNavItem>Home</AnimatedNavItem>
            </Link>

            <Link to="/about" className="group  transition">
              <AnimatedNavItem>About</AnimatedNavItem>
            </Link>

            <Link to="/contact" className="group  transition">
              <AnimatedNavItem>Contact Us</AnimatedNavItem>
            </Link>

            <a
              href="https://maps.app.goo.gl/rk49GZSnVmdKTJEk6"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2"
            >
              <AnimatedNavItem>Location</AnimatedNavItem>

              <a className="group flex items-center gap-2">
                <span className="inline-flex items-center justify-center">
                  <img
                    src={mapIcon}
                    alt="location"
                    className="w-6 h-6 transition-transform duration-300 ease-out transform group-hover:scale-125 group-hover:-translate-y-1"
                  />
                </span>
              </a>
            </a>

            <a
              href={`https://wa.me/${hotelPhone}?text=Hi%20I%20want%20to%20book%20a%20room`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black px-5 py-2 rounded-full hover:bg-green-400 transition font-semibold"
            >
              <AnimatedNavItem>Book Now</AnimatedNavItem>
            </a>
          </nav>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden px-6 pb-4 transition-all duration-300 ${
            isOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="bg-[#1f1f1f] text-white rounded-2xl p-6 flex flex-col gap-6 shadow-xl">
            <Link to="/" className="group" onClick={() => setIsOpen(false)}>
              <AnimatedNavItem>Home</AnimatedNavItem>
            </Link>

            <Link
              to="/about"
              className="group"
              onClick={() => setIsOpen(false)}
            >
              <AnimatedNavItem>About</AnimatedNavItem>
            </Link>

            <Link
              to="/contact"
              className="group"
              onClick={() => setIsOpen(false)}
            >
              <AnimatedNavItem>Contact Us</AnimatedNavItem>
            </Link>

            <a
              href="https://maps.app.goo.gl/rk49GZSnVmdKTJEk6"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2"
            >
              <AnimatedNavItem>Location</AnimatedNavItem>

              <a className="group flex items-center gap-2">
                <span className="inline-flex items-center justify-center">
                  <img
                    src={mapIcon}
                    alt="location"
                    className="w-6 h-6 transition-transform duration-300 ease-out transform group-hover:scale-125 group-hover:-translate-y-1"
                  />
                </span>
              </a>
            </a>

            <a
              href={`https://wa.me/${hotelPhone}?text=Hi%20I%20want%20to%20book%20a%20room`}
              target="_blank"
              rel="noreferrer"
              className="group bg-white text-black px-4 py-2 rounded-full text-center font-semibold hover:bg-green-400"
              onClick={() => setIsOpen(false)}
            >
              <AnimatedNavItem>Book Now</AnimatedNavItem>
            </a>
          </div>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home hotelPhone={hotelPhone} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function Home({ hotelPhone }: { hotelPhone: string }) {
  const [visibleCount, setVisibleCount] = useState(12);

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div>
      <div className="px-2 md:px-4">
        <HeroCarousel />
      </div>

      {/* Wider page container (max-w-7xl) and responsive padding */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <h2 className="text-xl font-semibold mb-6">Available Rooms</h2>

        {/* Use 3 columns on large screens so each card is wider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rooms.slice(0, visibleCount).map((r) => (
            // small side padding per card so cards breathe but remain wide
            <div key={r.id} className="px-2">
              <RoomCard room={r} phone={hotelPhone} />
            </div>
          ))}
        </div>

        {visibleCount < rooms.length && (
          <div className="text-center mt-8">
            <button
              onClick={handleViewMore}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full transition font-semibold shadow-md"
            >
              View More Rooms
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

function AnimatedNavItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block transition-transform duration-300 ease-out group-hover:scale-130">
      {children}
    </span>
  );
}
