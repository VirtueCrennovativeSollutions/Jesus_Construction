import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import img from "../../assets/Counterimg.jpg";

const stats = [
  { label: "PROJECT COMPLETED", value: 50},
  { label: "YEARS OF EXPERIENCE", value: 40 },
  { label: "SATISFIED CLIENTS", value: 100 },
  { label: "WORKERS EMPLOYED", value: 500 },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: false, // allow triggering multiple times
    threshold: 0.3,
  });

  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    } else {
      setStartCount(false); // Reset when out of view
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative bg-cover bg-center bg-no-repeat py-20 text-white"
      style={{
        backgroundImage: `url(${img})`, // ✅ Correct syntax
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
          >
            <h3 className="text-4xl font-bold mb-2">
              {startCount ? <CountUp end={stat.value} duration={2} /> : "0"}+
            </h3>
            <div className="w-10 h-1 mx-auto bg-[#960000] mb-2" />
            <p className="uppercase tracking-wide text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
