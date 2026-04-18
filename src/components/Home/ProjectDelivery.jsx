import { motion } from "framer-motion";
import { Calendar, CheckCircle, Users, Shield, Clock, Building } from "lucide-react";

const ProjectDelivery = () => {
  const methods = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Design-Build",
      description: "Single-source responsibility from concept to completion. Streamlined communication and faster project delivery.",
      steps: ["Concept Design", "Detailed Planning", "Construction", "Final Handover"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Construction Management",
      description: "Professional oversight of your project with transparent budgeting and scheduling throughout the construction process.",
      steps: ["Project Planning", "Contractor Management", "Quality Control", "Project Closeout"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "General Contracting",
      description: "Complete turnkey solutions with fixed pricing and guaranteed timelines for your peace of mind.",
      steps: ["Budget Finalization", "Timeline Agreement", "Construction Execution", "Quality Assurance"]
    }
  ];

  const process = [
    {
      phase: "01",
      title: "Consultation & Planning",
      description: "Initial meeting to understand your vision and requirements"
    },
    {
      phase: "02",
      title: "Design & Development",
      description: "Creating detailed plans and securing necessary approvals"
    },
    {
      phase: "03",
      title: "Construction",
      description: "Executing the project with quality materials and skilled labor"
    },
    {
      phase: "04",
      title: "Final Inspection & Handover",
      description: "Quality checks and official project delivery"
    }
  ];

  return (
    <section id="delivery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Project Delivery Methods
          </h2>
          <div className="w-24 h-1 bg-[#960000] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible approaches tailored to meet your specific project needs and budget requirements
          </p>
        </motion.div>

        {/* Delivery Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-[#960000] mb-6 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {method.description}
              </p>
              <div className="space-y-3">
                {method.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#960000] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Project Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-[#960000] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.phase}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div 
          className="mt-20 bg-gray-50 rounded-2xl p-8 border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-[#960000] mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Timely Delivery</h4>
              <p className="text-gray-600">Strict adherence to project schedules and deadlines</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-[#960000] mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h4>
              <p className="text-gray-600">Skilled professionals managing every aspect</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-[#960000] mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality Guarantee</h4>
              <p className="text-gray-600">Commitment to highest quality standards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDelivery;