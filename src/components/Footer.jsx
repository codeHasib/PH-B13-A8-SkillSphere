import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white font-mono border-t border-gray-800 px-6 py-12 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-black tracking-tighter mb-4">
            SKILLSPHERE
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed uppercase">
            Advancing human infrastructure through specialized digital
            education. 2026.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase mb-6 tracking-widest">
            Contact_Registry
          </h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>E: terminal@skillsphere.tech</li>
            <li>T: +880 1234 567 890</li>
            <li>L: Port City, CTG, BD</li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <h3 className="text-xs font-bold text-gray-400 uppercase mb-6 tracking-widest text-center">
            Social_Nodes
          </h3>
          <ul className="text-sm flex  gap-4">
            <li>
              <Link
                href="#"
                className="hover:text-white text-gray-300 transition-colors flex justify-center items-center"
              >
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white text-gray-300 transition-colors flex justify-center items-center"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white text-gray-300 transition-colors flex justify-center items-center"
              >
                <BsTwitterX />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase mb-6 tracking-widest">
            Protocols
          </h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>
              <Link href="#" className="hover:underline">
                TERMS & CONDITIONS
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                PRIVACY POLICY
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
        <p>© 2026 SkillSphere Technical Institute. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
