// components/Footer.jsx

import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-teal-950 text-white mt-10 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-5 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Logo & Text */}
          <div>
            <h2 className="text-2xl font-bold text-amber-300">
              Skill<span className="text-teal-400">Sphere</span>
            </h2>

            <p className="text-sm text-gray-300 mt-3 md:max-w-xs max-w-full">
              Learn modern skills from expert instructors and grow your career.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link className="hover:text-blue-500 hover:underline" href="/">Home</Link>
              <Link className="hover:text-blue-500 hover:underline" href="/courses">Courses</Link>
              <Link className="hover:text-blue-500 hover:underline" href="/profile">My Profile</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Legal
            </h3>

            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link className="hover:text-blue-500 hover:underline" href="/terms">Terms & Conditions</Link>
              <Link className="hover:text-blue-500 hover:underline" href="/privacy">Privacy Policy</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contact
            </h3>

            <a className="text-sm text-gray-300 hover:text-blue-500 hover:underline cursor-pointer" href="mailto:sheikhzim2004@gmail.com">
              sheikhzim2004@gmail.com
            </a>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-500 duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-500 duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-500 duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-8 pt-5 text-center text-sm text-gray-400">
          © 2026 SkillSphere. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;