import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, MapPin, Calendar, Building, CheckCircle, Clock, TrendingUp } from "lucide-react";

import img1 from "../../assets/img_1.jpg";
import img2 from "../../assets/img_2.jpg";
import img3 from "../../assets/img_3.jpg";
import img4 from "../../assets/img_4.jpg";
import img5 from "../../assets/img_5.jpg";
import img6 from "../../assets/img_6.jpg";
import img7 from "../../assets/img_7.jpg";
import img8 from "../../assets/img_8.jpg";
import img9 from "../../assets/img_9.jpg";
import img10 from "../../assets/img_10.jpg";
import img11 from "../../assets/img_11.jpg";
import img12 from "../../assets/img_12.jpg";

const allProjects = [
  {
    id: 1,
    title: "St. Roque Church",
    image: img1,
    description: "Complete RCC church construction combining modern engineering with traditional architectural elements.",
    category: "Religious",
    location: "Vasai, Maharashtra",
    year: "2023",
    scope: "Complete Construction",
    status: "completed",
    progress: 100,
    features: ["RCC Structure", "Traditional Architecture", "Modern Design", "Full Finishing"]
  },
  {
    id: 2,
    title: "St. Paul Church",
    image: img2,
    description: "Renovation and structural extension including upgraded interiors and architectural redesign.",
    category: "Religious",
    location: "Virar, Maharashtra",
    year: "2022",
    scope: "Renovation & Extension",
    status: "completed",
    progress: 100,
    features: ["Renovation", "Structural Expansion", "Interior Works", "Architectural Upgrade"]
  },
  {
    id: 3,
    title: "Mother Teresa Church",
    image: img3,
    description: "Large-scale church construction emphasizing durability, structural strength, and aesthetic appeal.",
    category: "Religious",
    location: "Vasai-Virar, Maharashtra",
    year: "2023",
    scope: "New Construction",
    status: "completed",
    progress: 100,
    features: ["Large Structure", "High Durability", "Strong RCC Framework", "Aesthetic Finish"]
  },
  {
    id: 4,
    title: "Holy Mary Convent",
    image: img4,
    description: "Institutional building including classrooms, dormitory facilities, and a prayer hall.",
    category: "Institutional",
    location: "Bangalore, Karnataka",
    year: "2022",
    scope: "Complete Construction",
    status: "completed",
    progress: 100,
    features: ["Classrooms", "Dormitory", "Prayer Hall", "Full Facility"]
  },
  {
    id: 5,
    title: "Nirmala Niketan College",
    image: img5,
    description: "Educational infrastructure project with laboratories, classrooms, and administrative spaces.",
    category: "Educational",
    location: "Mumbai, Maharashtra",
    year: "2021",
    scope: "Academic Block",
    status: "completed",
    progress: 100,
    features: ["Labs", "Classrooms", "Office Spaces", "Interior Finishing"]
  },
  {
    id: 6,
    title: "Gangangaon Junior College",
    image: img6,
    description: "Turnkey construction of junior college with RCC framework and interior finishing works.",
    category: "Educational",
    location: "Nashik, Maharashtra",
    year: "2023",
    scope: "Turnkey Project",
    status: "ongoing",
    progress: 75,
    features: ["Turnkey Execution", "RCC Work", "Interior Finishing", "Educational Infrastructure"]
  },
  {
    id: 7,
    title: "Jeevan Jal Hospital",
    image: img7,
    description: "Healthcare facility construction including OPD, IPD, emergency units, and structural RCC work.",
    category: "Healthcare",
    location: "Delhi",
    year: "2022",
    scope: "Healthcare Facility",
    status: "ongoing",
    progress: 60,
    features: ["OPD", "IPD", "Emergency Ward", "RCC Framework"]
  },
  {
    id: 8,
    title: "Agrawal Residential Complex",
    image: img8,
    description: "High-rise residential project with modern amenities, parking, and optimized layout design.",
    category: "Residential",
    location: "Hyderabad, Telangana",
    year: "2023",
    scope: "High-rise Complex",
    status: "ongoing",
    progress: 85,
    features: ["High-rise", "Parking", "Modern Amenities", "Residential Units"]
  },
  {
    id: 9,
    title: "Ashirwad Residential Complex",
    image: img9,
    description: "Premium residential building constructed with RCC structure and high-quality interior finishing.",
    category: "Residential",
    location: "Chennai, Tamil Nadu",
    year: "2022",
    scope: "Premium Residential",
    status: "completed",
    progress: 100,
    features: ["Premium Units", "RCC Structure", "Interior Finishing", "Turnkey Delivery"]
  },
  {
    id: 10,
    title: "St. Mathews Church",
    image: img10,
    description: "Architectural blend of historic and modern design with complete interior development.",
    category: "Religious",
    location: "Kochi, Kerala",
    year: "2021",
    scope: "Architectural Blend",
    status: "completed",
    progress: 100,
    features: ["Historic Design", "Modern Elements", "Mixed Architecture", "Interior Work"]
  },
  {
    id: 11,
    title: "Ashirwad Tower B",
    image: img11,
    description: "Phase 2 of residential complex with upgraded amenities and contemporary design approach.",
    category: "Residential",
    location: "Chennai, Tamil Nadu",
    year: "2023",
    scope: "Phase 2 Construction",
    status: "ongoing",
    progress: 45,
    features: ["Phase 2", "Modern Amenities", "Enhanced Design", "Residential Units"]
  },
  {
    id: 12,
    title: "St. Thomas Church Hall",
    image: img12,
    description: "Community hall extension with modern infrastructure and traditional architectural influence.",
    category: "Religious",
    location: "Bangalore, Karnataka",
    year: "2022",
    scope: "Hall Extension",
    status: "ongoing",
    progress: 30,
    features: ["Community Hall", "Modern Facilities", "Traditional Style", "Extension"]
  }
];

const statusCategories = ["All", "Completed", "Ongoing"];

export default function ProjectDetails() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeStatus, setActiveStatus] = useState("All");

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setOpenModal(true);
  };

  const filteredProjects = activeStatus === "All"
    ? allProjects
    : allProjects.filter(project =>
      (activeStatus === "Completed" && project.status === "completed") ||
      (activeStatus === "Ongoing" && project.status === "ongoing")
    );



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}



        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-[#960000]/20"
              onClick={() => openProjectModal(project)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Status Badge */}
                {/* <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === "completed" 
                      ? "bg-green-500 text-white" 
                      : "bg-blue-500 text-white"
                  }`}>
                    {project.status === "completed" ? "Completed" : "Ongoing"}
                  </span>
                </div> */}

                {/* Progress Text for Ongoing Projects */}
                {project.status === "ongoing" && (
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                      <div className="text-gray-700 text-sm font-semibold">
                        {project.progress}% Complete
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#960000] transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#960000]">
                    {project.scope}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-1 text-[#960000] font-semibold text-sm"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-gray-400 text-6xl mb-4">🏗️</div>
            <h3 className="text-2xl font-bold text-gray-600 mb-2">No Projects Found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more projects</p>
          </motion.div>
        )}
      </main>

      {/* Modal */}
      <AnimatePresence>
        {openModal && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setOpenModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors shadow-lg"
                  onClick={() => setOpenModal(false)}
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>

                {/* Status Badge Only - Category Badge Removed */}
                <div className="absolute bottom-4 left-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${selectedProject.status === "completed"
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                    }`}>
                    {selectedProject.status === "completed" ? "Completed" : "Ongoing"}
                  </span>
                </div>

                {/* Progress for Ongoing Projects */}
                {selectedProject.status === "ongoing" && (
                  <div className="absolute bottom-4 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <div className="text-sm font-semibold text-gray-700">
                      Progress: {selectedProject.progress}%
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedProject.title}
                </h2>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-[#960000]" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-semibold">{selectedProject.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#960000]" />
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-semibold">{selectedProject.year}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Building className="w-5 h-5 text-[#960000]" />
                    <div>
                      <p className="text-sm text-gray-500">Scope</p>
                      <p className="font-semibold">{selectedProject.scope}</p>
                    </div>
                  </div>
                </div>

                {/* Project Features */}
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg px-3 py-2 text-center">
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}