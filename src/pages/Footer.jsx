import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationSharp, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#960000] text-white mt-20 pt-16 pb-8">
      <div
        className="max-w-7xl mx-auto px-6 
                   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                   gap-12 md:gap-16 lg:gap-20
                   justify-items-start"
      >

        {/* Contact Section */}
        <div className="px-4 w-full">
          <h4 className="text-xl font-semibold mb-5">Contact Us</h4>

          <div className="space-y-4 text-sm text-[#ffe1e1] leading-relaxed">
            <p className="flex items-start gap-3">
              <IoLocationSharp className="text-white text-4xl  mt-1" />
              <span>
                45A, Ring Road, Gomti Nagar, Lucknow, Uttar Pradesh - 226010
              </span>
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-white" />
              +91 98765 43210
            </p>

            <p className="flex items-center gap-3">
              <IoMail className="text-white" />
              jesusconstruction@gmail.com
            </p>
          </div>
        </div>

        {/* Company Section */}
        <div className="px-4 w-full">
          <h4 className="text-xl font-semibold mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-[#ffe1e1]">
            {["About Us", "Our Projects", "Our Team", "Testimonials"].map(
              (link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services Section */}
        <div className="px-4 w-full">
          <h4 className="text-xl font-semibold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-[#ffe1e1]">
            {["Construction", "Interior Design", "Architecture", "Renovation"].map(
              (link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="px-4 w-full">
          <h4 className="text-xl font-semibold mb-5">Follow Us</h4>
          <p className="text-sm text-[#ffe1e1] mb-6 leading-relaxed">
            Stay connected with us on social media for the latest updates, projects, and insights.
          </p>
          
          <div className="flex gap-4">
            {[
              { icon: FaFacebookF, label: "Facebook" },
            
              { icon: FaLinkedinIn, label: "LinkedIn" },
              { icon: FaInstagram, label: "Instagram" },
              { icon: FaYoutube, label: "YouTube" }
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className="p-3 bg-[#5a0000] rounded-full 
                           hover:bg-white transition-all duration-300 hover:scale-110
                           flex items-center justify-center
                           group relative"
                aria-label={social.label}
              >
                <social.icon className="text-white group-hover:text-[#960000] text-lg" />
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                               bg-black text-white text-xs px-2 py-1 rounded 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-200
                               whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
          
          {/* Newsletter Subscription */}
         
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#ffbaba] mt-12 pt-4 text-center text-[#ffe1e1] text-sm">
        © {new Date().getFullYear()} Jesus Construction. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;