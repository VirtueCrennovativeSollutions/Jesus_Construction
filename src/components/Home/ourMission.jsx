import { motion } from "framer-motion";
import { Target, Award } from "lucide-react";

const Mission = () => {
  const missionPoints = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To deliver exceptional construction services through innovative solutions, quality craftsmanship, and unwavering commitment to client satisfaction."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be the most trusted construction partner, setting new standards in quality, safety, and sustainability in the building industry."
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Mission & Vision
          </h2>
          <div className="w-24 h-1 bg-[#960000] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building dreams into reality with precision, passion, and professionalism
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-[#960000] mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;