import { FaHotel, FaMapMarkerAlt, FaUsers, FaStar } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[320px] md:h-[380px] bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3">About Hotel Shimla</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Experience comfort, luxury and peaceful stay in the heart of Shimla.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Perfect Stay in Shimla
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hotel Shimla is designed to provide a peaceful and comfortable stay
              for families, couples, and travelers. Located in a prime area, our
              hotel offers beautiful views, clean rooms, and warm hospitality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We focus on comfort, cleanliness, and customer satisfaction. Whether
              you're visiting for a vacation, honeymoon, or business trip, we make
              sure your stay is memorable and relaxing.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Feature
              icon={<FaHotel />}
              title="Luxury Rooms"
              desc="Spacious, clean and well-furnished rooms with scenic views."
            />
            <Feature
              icon={<FaStar />}
              title="Top Rated"
              desc="Highly rated by guests for comfort and service quality."
            />
            <Feature
              icon={<FaMapMarkerAlt />}
              title="Prime Location"
              desc="Located near major tourist attractions in Shimla."
            />
            <Feature
              icon={<FaUsers />}
              title="Family Friendly"
              desc="Perfect stay for families, couples and group travelers."
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hotel Shimla started with a simple goal — to provide a comfortable
              and affordable stay in the hills. Over the years, we have welcomed
              thousands of guests from across the country.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our focus has always been on guest happiness. We continue to improve
              our services and rooms to give you the best experience possible.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-14 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Ready to Book Your Stay?
        </h2>
        <p className="opacity-90 mb-6">
          Contact us now and reserve your perfect room in Shimla.
        </p>

        <a
          href="https://wa.me/919646616601?text=Hi%20I%20want%20to%20book%20a%20room"
          target="_blank"
          className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
        >
          Book on WhatsApp
        </a>
      </section>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="text-3xl text-green-700 mb-3 flex justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}
