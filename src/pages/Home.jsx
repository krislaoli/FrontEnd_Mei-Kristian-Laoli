import CountUp from "react-countup";
import DataImage from "../data";

import { listTools } from "../data";

function Home() {
  const services = [
    {
      title: "Website development",
      desc: "High-performance website to reach out more your potential customers",
      icon: "💻",
      active: true,
    },
    {
      title: "Mobile apps development",
      desc: "To accelerate your business process",
    },
    {
      title: "Digital product design",
      desc: "Complete digital product creations from UX prototyping to final UI designs",
    },
    {
      title: "Maintenance",
      desc: "Make sure your digital environment keep online and updated",
    },
    {
      title: "CMS development",
      desc: "You can update your website content yourself",
    },
    {
      title: "Integrated payment gateway",
      desc: "Simplify the payment system with just one step",
    },
  ];

  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="hero grid grid-cols-1 md:grid-cols-2 items-center min-h-screen px-6 md:px-0 md:pl-20 py-16 bg-white relative overflow-x-visible">
        <div className="space-y-8 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Build or scale up <br />
            <span className="font-normal">your development team</span>
          </h1>
          <div className="flex items-center gap-3">
            <span className="w-10 h-[2px] bg-yellow-400"></span>
            <p className="text-gray-600 font-medium">in weeks, not months</p>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-500 transition">
            Book now
          </button>
        </div>
        <div className="relative mt-10 md:mt-0 z-0 flex justify-end">
          <img
            src={DataImage.HeroImage}
            alt="Hero"
            className="w-[90%] md:w-[110%] object-cover rounded-xl translate-x-4"
          />
          <div className="absolute top-0 -left-6 grid grid-cols-3 gap-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 bg-yellow-400 rounded-full opacity-80"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== Services Section ========== */}
      <section className="bg-gray-200 py-20 px-6 md:px-16">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 font-medium uppercase mb-2">
            Complete Package
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            From product design to software continuous delivery
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-md bg-white border ${
                item.active
                  ? "border-yellow-400 shadow-md"
                  : "border-transparent"
              }`}
            >
              <div className="text-3xl mb-4">{item.icon || "🧩"}</div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Technologies Section ========== */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 font-medium uppercase mb-2">
            Tecnologi Use
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="flex flex-col items-center bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-md font-semibold text-gray-800 mb-1">
                {tool.nama}
              </h3>
              <p className="text-sm text-gray-500">{tool.ket}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Progress Stats Section ========== */}
      <section className="bg-[#1E1E1E] text-white py-20 px-6 md:px-16 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-12 px-4">
          Our Progress Comes with a Collaboration Between <br />
          <span className="font-bold">Creativity, Ideas, and Technology</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={1000} duration={2.5} separator="," />+
            </h3>
            <p className="text-gray-300 mt-2">Designs</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={30} duration={2} />+
            </h3>
            <p className="text-gray-300 mt-2">Products</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              <CountUp end={58} duration={2.5} />+
            </h3>
            <p className="text-gray-300 mt-2">Website Developments</p>
          </div>
        </div>
      </section>

      {/* ========== Portfolio Section ========== */}
      <section className="bg-gray-200 py-20 px-6 md:px-16">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 font-medium uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The software that we build <br />
            takes our clients to the next level
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "ILIOS app (B2B E-commerce)",
              category: "Mobile apps",
              description:
                "Has a unique selling point where not all companies offer applications for sales, data collection and management.",
              image: "/assets/proyek/proyek2.webp", // Ganti dengan path gambarmu
              highlight: true,
            },
            {
              title: "Home and Living",
              category: "Website development",
              description:
                "Albatech helps in creating a website catalog to show brand identity and information in accordance with vision and mission of Home and Living.",
              image: "/assets/proyek/proyek3.webp", // Ganti dengan path gambarmu
            },
            {
              title: "HIPPO",
              category: "Website development",
              description:
                "Albatech help to create e-commerce and company profile for Hippo’s Website with realtime transaction and integration with Payment Gateway to accept multi payment.",
              image: "/assets/proyek/proyek4.webp", // Ganti dengan path gambarmu
            },
          ].map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition ${
                project.highlight ? "border border-yellow-400" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-400">{project.category}</p>
                <h3 className="text-lg font-semibold text-yellow-500 mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Testimonials Section ========== */}
      <section className="bg-gray-50 py-20 px-6 md:px-16 relative overflow-hidden">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What clients love in working <br className="hidden md:block" />
            with Albatech Team
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
          {[
            {
              quote: `"They are people who are not only following the tasks, but can work as a team. Together."`,
              name: "Matthijs Piëst",
              role: "COO at WieBetaaltWat",
              highlight: "Amazing people",
              mark: "“",
              markClass: "top-4 left-4",
            },
            {
              quote: `“We felt like we had a true partner throughout the process. They were clearly interested on our long-term success.”`,
              name: "Matthijs Piëst",
              role: "COO at WieBetaaltWat",
              highlight: "Partnership approach",
              mark: "”",
              markClass: "bottom-4 right-4",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-lg relative">
              <span
                className={`absolute ${item.markClass} text-yellow-200 text-[8rem] leading-none font-serif -z-10`}
              >
                {item.mark}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.highlight}
              </h3>
              <p className="text-gray-700 text-base mb-4">{item.quote}</p>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-4" />
                <div>
                  <p className="text-gray-900 font-medium">{item.name}</p>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {["left-0", "right-0"].map((pos, i) => (
          <div
            key={i}
            className={`absolute top-1/2 ${pos} transform -translate-y-1/2 z-0`}
          >
            <div className="grid grid-cols-3 gap-2 p-4">
              {Array.from({ length: 9 }).map((_, j) => (
                <span
                  key={j}
                  className="w-2 h-2 bg-yellow-300 rounded-full opacity-50"
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ========== Call to Action Section ========== */}
      <section className="bg-yellow-400 py-20 px-6 md:px-16 rounded-3xl mx-4 my-10 text-center">
        <p className="text-sm text-gray-800 mb-4">
          Is software important for your business?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Build it with Albatech
        </h2>
        <button className="text-sm font-semibold underline underline-offset-4 text-black hover:text-white transition">
          Consultation Now
        </button>
      </section>
    </>
  );
}

export default Home;
