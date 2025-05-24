import DataImage from "../data";

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

  const techStack = [
    "aws", "gcloud", "angular", "css", "html", "node",
    "php", "react", "mongo", "python", "ruby", "mysql",
    "postgresql", "sqlserver",
  ];

  return (
    <>
      {/* ========== Hero Section ========== */}
      <section className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-32 px-6 md:px-16 bg-gray-100 min-h-screen">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Build or scale up <br />
            <span className="font-normal">your development team</span>
          </h1>
          <div className="bg-white inline-flex items-center gap-3 py-3 px-6 rounded-md shadow-md">
            <span className="w-10 h-[2px] bg-yellow-400"></span>
            <p className="text-sm text-gray-700 font-medium">in weeks, not months</p>
          </div>
          <button className="text-sm font-semibold underline underline-offset-4 text-black hover:text-yellow-500 transition">
            Book now
          </button>
        </div>

        <div className="mt-10 md:mt-0">
          <img
            src={DataImage.HeroImage}
            alt="Hero"
            className="w-full max-w-xl mx-auto rounded-xl"
          />
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
                item.active ? "border-yellow-400 shadow-md" : "border-transparent"
              }`}
            >
              <div className="text-3xl mb-4">{item.icon || "🧩"}</div>
              <h3 className="text-lg font-semibold text-yellow-500 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Technologies Section ========== */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 font-medium uppercase mb-2">
            Technologies We Use
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
          {techStack.map((tech, i) => (
            <img
              key={i}
              src={`/tech/${tech}.png`}
              alt={tech}
              className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </section>

      {/* ========== Testimonials Section ========== */}
      <section className="bg-gray-50 py-20 px-6 md:px-16 relative overflow-hidden">
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-widest">Testimonials</p>
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
              <span className={`absolute ${item.markClass} text-yellow-200 text-[8rem] leading-none font-serif -z-10`}>
                {item.mark}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.highlight}</h3>
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

        {/* Decorative Dots */}
        {["left-0", "right-0"].map((pos, i) => (
          <div key={i} className={`absolute top-1/2 ${pos} transform -translate-y-1/2 z-0`}>
            <div className="grid grid-cols-3 gap-2 p-4">
              {Array.from({ length: 9 }).map((_, j) => (
                <span key={j} className="w-2 h-2 bg-yellow-300 rounded-full opacity-50" />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ========== Call to Action Section ========== */}
      <section className="bg-yellow-400 py-20 px-6 md:px-16 rounded-3xl mx-4 my-10 text-center">
        <p className="text-sm text-gray-800 mb-4">Is software important for your business?</p>
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
