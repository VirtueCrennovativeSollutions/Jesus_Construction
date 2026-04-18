import {
  FaPencilRuler,
  FaDraftingCompass,
  FaBolt,
  FaHardHat,
  FaTools,
  FaWrench,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Construction Consultant",
    description:
      "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    icon: <FaPencilRuler size={28} />,
  },
  {
    title: "Architectural Design",
    description:
      "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    icon: <FaDraftingCompass size={28} />,
  },
  {
    title: "Electrical System",
    description:
      "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    icon: <FaBolt size={28} />,
  },
  {
    title: "General Contracting",
    description:
      "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    icon: <FaHardHat size={28} />,
  },
  {
    title: "Reconstruction Services",
    description:
      "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    icon: <FaTools size={28} />,
  },
  {
    title: "Plumbing Services",
    description:
      "Vestibulum eu libero volutpat, portas quam, tempus sem. Donec sodales quam id lorem lobortis, vitae interdum nisl.",
    icon: <FaWrench size={28} />,
  },
];

export default function MainServices() {
  return (
    <section className="py-16 bg-white text-gray-800 px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }} // updated
      >
        <motion.h2
          className="text-3xl text-[#960000] font-semibold"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }} // updated
        >
          MAIN SERVICES
        </motion.h2>
        <motion.div
          className="mt-2 w-16 h-1 bg-[#960000]  mx-auto rounded"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ amount: 0.3 }} // updated
        />
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ amount: 0.3 }} // updated
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-6"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="bg-[#515659] text-white p-4 rounded-full shadow-lg"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {service.icon}
            </motion.div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
