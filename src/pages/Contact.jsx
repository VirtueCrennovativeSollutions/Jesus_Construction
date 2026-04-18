import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle,
  Navigation,
  Loader2
} from "lucide-react";

const Contact = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Our Office Address",
      details: "494, Jesus Grace, Sitterbhat, Nanbhat, Nallasopara West, 401203, Palghar, Maharashtra",
      link: "https://maps.app.goo.gl/rCkPzo2X3DPCPi4q8?g_st=aw",
      linkText: "Open in Google Maps",
      color: "from-blue-500 to-blue-600",
      highlight: true
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us Directly",
      details: "+91 98502 57983\n+91 80070 80926",
      link: "https://wa.me/919850257983",
      linkText: "Chat on WhatsApp",
      color: "from-green-500 to-green-600",
      highlight: true
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: "info@jesusconstruction.in",
      link: "mailto:info@jesusconstruction.in",
      linkText: "Send Email",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      details: "Monday - Saturday: 9:00 AM - 7:00 PM\nSunday: Closed",
      color: "from-purple-500 to-purple-600"
    }
  ];

  // Google Maps Embed URL with proper parameters
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15080.394789672642!2d72.84912924999999!3d19.113332399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ef6a0c0e1d%3A0xcdc640771b385c38!2sNallasopara%20West%2C%20Nallasopara%2C%20Maharashtra%20401203!5e0!3m2!1sen!2sin!4v1706781234567!5m2!1sen!2sin";

  useEffect(() => {
    // Simulate map loading delay for better UX
    const timer = setTimeout(() => {
      setIsMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Contact <span className="text-[#960000]">Jesus Construction</span>
          </h1>
          <div className="w-24 h-1 bg-[#960000] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for your construction needs. We're here to bring your vision to life!
          </p>
        </div>
      </motion.div>

      {/* Contact Information Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl shadow-xl ${
                item.highlight ? 'transform hover:scale-105 transition-transform duration-300' : ''
              }`}
            >
              <div className={`bg-gradient-to-r ${item.color} p-1`}>
                <div className="bg-white rounded-xl p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${item.color} text-white p-3 rounded-xl`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line mb-4 text-lg leading-relaxed">
                        {item.details}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800 transition-colors text-lg"
                        >
                          <Navigation className="w-5 h-5" />
                          {item.linkText}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-[#960000] to-[#7a0000] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Quick Connect</h2>
            <p className="text-lg mb-6 opacity-90">
              Prefer to reach out directly? Use these quick action buttons.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919850257983"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Now
              </a>
              <a
                href="tel:+919850257983"
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Google Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 text-center border-b">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Location
              </h2>
              <p className="text-gray-600 text-lg">
                Jesus Construction, Nallasopara West, Palghar, Maharashtra 401203
              </p>
            </div>
            
            {/* Interactive Google Map */}
            <div className="w-full h-[500px] relative">
              {!isMapLoaded ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 text-[#960000] animate-spin mx-auto mb-4" />
                    <p className="text-gray-600">Loading map...</p>
                  </div>
                </div>
              ) : mapError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Map Unavailable</h3>
                    <p className="text-gray-600 mb-4">Unable to load the map. Please use the links below to view on Google Maps.</p>
                    <a
                      href="https://maps.app.goo.gl/rCkPzo2X3DPCPi4q8?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Open in Google Maps
                      <Navigation className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src={mapUrl}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jesus Construction Location Map"
                  onLoad={() => setIsMapLoaded(true)}
                  onError={() => setMapError(true)}
                />
              )}
              
              {/* Map Overlay Info Card */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-xl p-4 max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="bg-[#960000] text-white p-2 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Jesus Construction</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      494, Jesus Grace, Sitterbhat, Nanbhat
                    </p>
                    <p className="text-sm text-gray-600">
                      Nallasopara West, Palghar, Maharashtra 401203
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Actions */}
            <div className="p-6 bg-gray-50 border-t">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://maps.app.goo.gl/rCkPzo2X3DPCPi4q8?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#960000] hover:bg-[#7a0000] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Open in Google Maps
                </a>
                <a
                  href="https://www.google.com/maps/dir//Jesus+Construction+Nallasopara+West+Palghar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nearby Landmarks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Nearby Landmarks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Nallasopara Railway Station", distance: "2.5 km" },
                { name: "St. John the Baptist Church", distance: "1.2 km" },
                { name: "Nallasopara West Police Station", distance: "3 km" }
              ].map((landmark, index) => (
                <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:border-[#960000] transition-colors">
                  <div className="text-lg font-semibold text-gray-800 mb-2">{landmark.name}</div>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Navigation className="w-4 h-4" />
                    <span>{landmark.distance} away</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { number: "40+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-[#960000] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;