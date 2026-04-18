import React from "react";
import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Construction, 
  PenTool, 
  Building, 
  CheckCircle,
  Calculator,
  Calendar,
  Users,
  Shield,
  Target
} from "lucide-react";
import img2 from "../../assets/main_img2.jpg";
import img1 from "../../assets/main_img2.jpg";
import img3 from "../../assets/main_img3.jpg";
import img4 from "../../assets/img_4.jpg";

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ServicesDetail = () => {
  const services = [
    {
      icon: <ClipboardList className="w-12 h-12" />,
      title: "Pre-Construction Services",
      description: "Everything starts with pre-construction services. As soon as the journey for a new building project begins, there are several tasks and questions that the team should investigate. This is the time where an idea gradually turns into an actual project and practical aspects of the vision are analysed.",
      keyQuestions: [
        "What's the first step that I need to focus on?",
        "What type of building permits will be necessary?",
        "Is it better to invest in new construction, renovation or demolition?",
        "What could be the total cost of the project?",
        "How long will the project take?",
        "What type of challenges might emerge during the building process?",
        "Can I break up the project into phases? What makes sense?",
        "What unplanned obstacles should I plan for?",
        "Most importantly: Where do I start?!"
      ],
      features: [
        "Cost estimation & budget planning",
        "Project scheduling & timeline development",
        "Design decision-making & feasibility analysis",
        "Material selection & approvals",
        "Building permits & regulatory compliance",
        "Traffic studies & environmental impact",
        "LEED Certification process",
        "Land purchase consultation",
        "Risk assessment & mitigation planning"
      ],
      image: img1
    },
    {
      icon: <Construction className="w-12 h-12" />,
      title: "Construction Project Management",
      description: "Comprehensive project management from initiation to closure with solid collaboration between various agents and excellent team coordination. We ensure your project proceeds exactly as planned while staying on budget.",
      phases: {
        planning: [
          "Work closely with engineers and architects to develop project design",
          "Determine material, equipment and building system requirements",
          "Develop efficient schedules and contractual agreements",
          "Handle all required building permits and regulatory compliance",
          "Manage subcontractor selection and bidding process",
          "LEED certification planning and implementation"
        ],
        execution: [
          "Site safety management and compliance with all safety standards",
          "Quality control and assurance throughout construction",
          "Regular progress meetings with owners, subcontractors, and consultants",
          "Cost accounting and budget management",
          "Daily monitoring and coordination of all site work",
          "Comprehensive project documentation (submittals, RFI's)",
          "Construction site visits and progress tracking",
          "Payment processing and financial management",
          "Punch list management and quality assurance"
        ],
        postConstruction: [
          "Warranty support and issue resolution",
          "Final inspections and project closeout",
          "Dispute resolution and conflict management",
          "Building commissioning and handover",
          "Maintenance planning and operational training"
        ]
      },
      image: img2
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Design-Build Services",
      description: "Our integrated approach where the same team provides both design and construction services, boosting efficiency and minimizing risk. This method ensures better understanding of potential challenges and optimal material and equipment selection.",
      benefits: [
        "Lower overall project costs through integrated planning",
        "Higher efficiency and better team coordination",
        "Enhanced quality monitoring throughout design and construction",
        "Fewer conflicts and delays with single-point responsibility",
        "Better communication and streamlined decision-making",
        "Sustainable building opportunities and innovation focus",
        "Faster project delivery through parallel processing"
      ],
      image: img3
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Building Services",
      description: "Comprehensive building services to ensure your structure remains safe, functional, and comfortable throughout its lifecycle. We handle everything from essential systems to advanced building technologies.",
      features: [
        "Power supply systems: electricity, sustainable energy, gas",
        "Fire protection, safety systems and detection",
        "HVAC systems: heating, ventilation, air conditioning",
        "Plumbing and water systems",
        "Lighting systems (artificial and natural)",
        "Lifts, escalators and vertical transportation",
        "Security and alarm systems",
        "Building automation and management systems",
        "Facade engineering and consultancy",
        "Carbon emission estimation and reduction strategies",
        "Humidity control and environmental systems",
        "Drainage and refrigerant systems",
        "Sensor installation and smart building connectivity",
        "Lightning safety systems"
      ],
      image: img4
    }
  ];

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
            Our <span className="text-[#960000]">Construction Services</span>
          </h1>
          <div className="w-24 h-1 bg-[#960000] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Jesus Infrastructure offers a full range of construction services from building design decisions to operation and maintenance - all under one roof. We transform your vision from concept to completion with excellence at every stage.
          </p>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`mb-20 ${
              index % 2 === 0 
                ? "bg-white rounded-3xl shadow-xl border border-gray-100" 
                : "bg-gray-50 rounded-3xl shadow-xl border border-gray-200"
            }`}
          >
            <div className={`grid lg:grid-cols-2 gap-8 p-8 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Content */}
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#960000] text-white p-3 rounded-2xl">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {service.title}
                  </h2>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Questions for Pre-Construction */}
                {service.keyQuestions && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#960000]" />
                      Key Questions We Help Answer:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.keyQuestions.map((question, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Calculator className="w-4 h-4 text-[#960000] mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{question}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features List */}
                {service.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-[#960000]" />
                      Our Services Include:
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-[#960000] flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Benefits for Design-Build */}
                {service.benefits && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-[#960000]" />
                      Key Benefits:
                    </h3>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-[#960000] flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Phased Content for Construction Management */}
                {service.phases && (
                  <div className="space-y-6">
                    {Object.entries(service.phases).map(([phase, items]) => (
                      <div key={phase}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3 capitalize flex items-center gap-2">
                          {phase === 'planning' && <Calendar className="w-5 h-5 text-[#960000]" />}
                          {phase === 'execution' && <Construction className="w-5 h-5 text-[#960000]" />}
                          {phase === 'postConstruction' && <Users className="w-5 h-5 text-[#960000]" />}
                          {phase.replace(/([A-Z])/g, ' $1').trim()} Phase:
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#960000] mt-1 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Image - Now all sections have images */}
              <motion.div 
                className={`flex items-center justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-2xl shadow-lg w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Why Choose Us Section */}
        <motion.div
          variants={sectionFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#960000] to-[#7a0000] text-white rounded-3xl p-8 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Choose Jesus Infrastructure?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              "Full range of construction services under one roof",
              "Mumbai-based with local expertise and global standards",
              "15+ years of construction experience",
              "Modern design visualization and walk-through technology",
              "On-time and on-budget project delivery guarantee",
              "Highest craftsmanship standards",
              "Transparent communication throughout the process",
              "Safe working environment and practices",
              "Client satisfaction above industry standards"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 bg-white/10 rounded-2xl p-6">
            <p className="text-xl font-semibold mb-4">
              We are committed to our client's construction needs and delivering all projects 
              to a satisfaction level above industry standards.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#960000] px-8 py-3 rounded-lg font-bold 
                       hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Project Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesDetail;