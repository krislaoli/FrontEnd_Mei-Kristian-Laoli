import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 px-6 md:px-16 py-12 mt-20 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <img src="/Logo.png" alt="Albatech Logo" className="h-10 mb-4" />
          <p>
            Albatech acts as a corporate partner to help digitize their business
            to accelerate trends in remote work.
          </p>
        </div>

        {/* Website Links */}
        <div>
          <h4 className="text-base font-semibold text-gray-900 mb-4">Website</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-500">About</a></li>
            <li><a href="#" className="hover:text-yellow-500">Service</a></li>
            <li><a href="#" className="hover:text-yellow-500">Portfolio</a></li>
            <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-500">Career</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-base font-semibold text-gray-900 mb-4">Contact</h4>
          <p>
            The Prominence Blok 38D No.25<br />
            Jl. Jalur Sutera Barat, Alam Sutera,<br />
            Kota Tangerang, Banten 15143
          </p>
          <p className="mt-4"><strong>P :</strong> +62 81 1889 3383</p>
          <p><strong>E :</strong> info@albatech.id</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
