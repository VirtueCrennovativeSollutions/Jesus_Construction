import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import img from "../../assets/img_1.jpg";
import img2 from "../../assets/iabout.jpg";

const Counter = ({ end, duration = 2, prefix = "", suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="inline-flex items-baseline">
      <span className="font-bold text-[#960000]">{prefix}{count}{suffix}</span>
      {label && <span className="ml-1 text-gray-600">{label}</span>}
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, threshold: 0.1 });

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-white" ref={sectionRef}>
      <div className="container mx-auto px-6 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Overlapping Images */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, threshold: 0.1 }}
          >
            {/* Main Image - Smaller */}
            <div className="relative h-80 lg:h-[360px] w-[450px] overflow-hidden shadow-2xl group z-10">
              <img
                src={img}
                alt="Builder Company"
                className="w-full h-full object-cover transition-transform duration-700 border-4 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#960000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Overlapping Image */}
            <motion.div 
              className="absolute bottom-[-7rem] -right-6 w-4/5 h-80 overflow-hidden shadow-2xl group z-0 border-4 border-white"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true, threshold: 0.1 }}
            >
              <img
                src={img2}
                alt="Construction Site"
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#960000]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, threshold: 0.1 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-[#960000] mb-8 relative pb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, threshold: 0.1 }}
            >
              Building Excellence Since
           
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-[#960000]"></span>
            </motion.h2>
            
            <div className="space-y-6 mb-10">
              <motion.div 
                className="p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#960000] hover:shadow-lg transition-all duration-300 hover:bg-[#960000]/5 group bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true, threshold: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  We are a Mumbai based Drafting Design and General Construction Company with over  of combined experience, catering to your needs whether it be in residential, commercial or remodeling construction. There is no project too large or too small. We have successfully completed over <Counter end={500} suffix="+" label="projects" /> ranging from small renovations to multi-million dollar developments.
                </p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#960000] hover:shadow-lg transition-all duration-300 hover:bg-[#960000]/5 group bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true, threshold: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-[15px] text-gray-600 leading-relaxed">
                  We can take your project from conceptual ideas to a finish product that you can be proud of for years to come. Our speaks to our commitment to quality. We use advanced computer software programs that allow us to create vertical walk-throughs of projects during the design phase, selecting all interior and exterior finishes as the drawings progress.
                </p>
              </motion.div>
            </div>

            {/* Stats Grid - Modern Design */}
            {isSectionInView && (
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                {/* Years Experience */}
                <motion.div 
                  className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#960000] group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#960000]/10 flex items-center justify-center mr-4 group-hover:bg-[#960000]/20 transition-colors duration-300">
                      <span className="text-[#960000] font-bold text-lg">Ⓒ</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#960000]">
                        <Counter end={25} suffix="+" />
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                    </div>
                  </div>
                </motion.div>

                {/* Projects Completed */}
                <motion.div 
                  className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#960000] group"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#960000]/10 flex items-center justify-center mr-4 group-hover:bg-[#960000]/20 transition-colors duration-300">
                      <span className="text-[#960000] font-bold text-lg">✓</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#960000]">
                        <Counter end={40} suffix="+" />
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
                    </div>
                  </div>
                </motion.div>

                {/* Client Satisfaction */}
                <motion.div 
                  className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#960000] group md:col-span-2 lg:col-span-1"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#960000]/10 flex items-center justify-center mr-4 group-hover:bg-[#960000]/20 transition-colors duration-300">
                      <span className="text-[#960000] font-bold text-lg">♥</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#960000]">
                        <Counter end={98} suffix="%" />
                      </div>
                      <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Additional Stats Row */}
            {isSectionInView && (
              <motion.div 
                className="grid grid-cols-2 gap-6 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {/* Repeat Clients */}
                <div className="bg-gradient-to-r from-[#960000]/5 to-transparent p-3 rounded-lg border border-[#960000]/10">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#960000]/20 flex items-center justify-center mr-3">
                      <span className="text-[#960000] text-sm font-bold">↻</span>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#960000]">
                        <Counter end={85} suffix="%" />
                      </div>
                      <div className="text-xs text-gray-600">Repeat Clients</div>
                    </div>
                  </div>
                </div>

                {/* On-time Delivery */}
                <div className="bg-gradient-to-r from-[#960000]/5 to-transparent p-3 rounded-lg border border-[#960000]/10">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#960000]/20 flex items-center justify-center mr-3">
                      <span className="text-[#960000] text-sm font-bold">⏱</span>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#960000]">
                        <Counter end={92} suffix="%" />
                      </div>
                      <div className="text-xs text-gray-600">On-time Delivery</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;