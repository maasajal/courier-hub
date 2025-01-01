"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Us */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-xl font-bold text-white">About Us</h3>
            <p>
              Support your brother who needs a job. <br /> Find a Trusted
              Substitute <br />
              Be a Trusted Substitute
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#umrah-packages" className="hover:text-green-500">
                  All Jobs
                </a>
              </li>
              <li>
                <a href="#hotels" className="hover:text-green-500">
                  Trusted Contract Person
                </a>
              </li>
              <li>
                <a href="#workshop" className="hover:text-green-500">
                  Trusted Substitute
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-500" />
                <a href="tel:+358465896030" className="hover:text-green-500">
                  +358 46 589 6030
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-green-500" />
                <a
                  href="mailto:umrah@business-easy.com"
                  className="hover:text-green-500"
                >
                  courierhub@business-easy.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-500" />
                <span>Tampere, Finland</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center gap-5">
          {/* Copyright */}
          <p className="text-sm">
            Copyright © {new Date().getFullYear()}{" "}
            <Link
              href="https://business-easy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              CourierHub.
            </Link>{" "}
            All right reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.facebook.com/groups/ridersupport"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaFacebook size={20} />
            </a>
            {/* <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a> */}
          </div>
        </div>

        <div className="text-center py-5 border-y border-blue-700 max-w-80 mx-auto my-5">
          <Link href="https://maasajal-portfolio.vercel.app" target="_blank">
            Website Made with 💙 by MaaSajal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import logo from "@/app/assets/BELogo.png";
// import { FaWhatsapp } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";
// import { FaLocationDot } from "react-icons/fa6";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <>
//       <div className="border-t-4 border-[#003479]">
//         <footer className="container footer py-10 sm:px-20 row-start-3 flex gap-6 flex-wrap items-center justify-center">
//           <aside className="max-w-xs">
//             <a className="btn btn-ghost h-full w-40">
//               <Image
//                 className="dark:invert"
//                 src={logo}
//                 alt="company logo"
//                 width={100}
//                 height={100}
//               />
//             </a>
//             <div className="leading-8">
//               <p>
//                 BusinessEasy <br />
//                 Business ID: 3283660-3
//               </p>
//               <p>
//                 Invest your time and efforts on running your business. Leave the
//                 accounting to me. Make your life easy, comfortable and success.
//               </p>
//             </div>
//           </aside>
//           <nav>
//             <h6 className="footer-title">Contact Info</h6>
//             <a
//               href="https://maps.app.goo.gl/xLLp3y92Z8ffJ5SC8"
//               target="_blank"
//               className="link link-hover flex items-center justify-center gap-2"
//             >
//               <FaLocationDot className="text-lg" />
//               <address>
//                 Orivedenkatu 5, 33720, <br />
//                 Tampere, Finland
//               </address>
//             </a>
//             <a
//               href="tel:+358449869280"
//               className="link link-hover flex items-center justify-center gap-2"
//             >
//               <FaWhatsapp className="text-lg" /> +358449869280
//             </a>
//             <a
//               href="mailto:info@business-easy.com"
//               className="link link-hover flex items-center justify-center gap-2"
//             >
//               <MdOutlineMail className="text-lg" /> umrah@business-easy.com
//             </a>
//           </nav>
//           <nav>
//             <h6 className="footer-title">Services</h6>
//             <a className="link link-hover">Accounting Service</a>
//             <a className="link link-hover">Bookkeeping Service</a>
//             <a className="link link-hover">Financial Service</a>
//             <a className="link link-hover">Financial Statement Preparation</a>
//             <a className="link link-hover">Individual VAT & Tax Service</a>
//             <a className="link link-hover">Payroll Service</a>
//             <a className="link link-hover">VAT & Tax Service</a>
//           </nav>
//           <nav>
//             <h6 className="footer-title">Legal</h6>
//             <a className="link link-hover">Terms of use</a>
//             <a className="link link-hover">Privacy policy</a>
//             <a className="link link-hover">Cookie policy</a>
//           </nav>
//         </footer>
//         <footer className="bg-[#003479] text-white p-4 text-center">
//           <aside>
//             <p>
//               Copyright © {new Date().getFullYear()} - All right reserved by
//               <Link
//                 href="https://business-easy.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {" "}
//                 BusinessEasy
//               </Link>
//             </p>
//           </aside>
//         </footer>
//       </div>
//     </>
//   );
// };
// export default Footer;
