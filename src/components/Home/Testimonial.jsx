import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";


const testimonials = [
  {
    name: "Don Paulson",
    role: "Architectural Co.",
    image:
      "https://img.freepik.com/free-photo/businesswoman-posing_23-2148142829.jpg", // Placeholder image
    rating: 5,
    content:
      "Your efficient planning, scheduling, management, and supervision resulted in timely completion and a quality facility... Particularly refreshing was the spirit of cooperation demonstrated by your firm which served to minimize costly delays and contract modifications.",
  },
  // Add 4 more testimonial objects here
  {
    name: "Dipika Yadav",
    role: "Interior Designer",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/038/974/578/small_2x/ai-generated-professional-portrait-of-a-competent-woman-free-photo.jpg",
    rating: 5,
    content:
      "Their commitment to quality and attention to detail impressed me deeply. They met all deadlines and exceeded expectations.",
  },
  {
    name: "Shivani Verma",
    role: "Construction Manager",
    image:
      "https://thumbs.dreamstime.com/b/happy-smart-business-man-team-mates-discussing-men-background-56327320.jpg",
    rating: 5,
    content:
      "I was amazed by their professionalism and dedication. The team worked tirelessly to ensure everything ran smoothly.",
  },
  {
    name: "Ayush chaudhary",
    role: "Project Consultant",
    image:
      "https://thumbs.dreamstime.com/b/working-new-tablet-low-angle-view-confident-young-man-working-digital-tablet-standing-front-big-window-83902732.jpg",
    rating: 5,
    content:
      "From start to finish, their process was transparent and efficient. Highly recommend them for any project.",
  },
  {
    name: "Zeenat Khan",
    role: "Urban Planner",
    image:
      "https://img.freepik.com/free-photo/confident-pretty-business-woman-with-arms-crossed_1262-2992.jpg",
    rating: 5,
    content:
      "Excellent communication and project handling. Their expertise made a big difference in our timeline.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  return (
    <div className="p-8 bg-[#ffeeee] mt-[6rem]">
      <h2 className="text-3xl font-bold mb-4 border-b-4 border-[#960000] w-fit text-center mx-auto">
        TESTIMONIALS
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-lg p-6 mb-10"
        >
          <p className="text-gray-600 italic mb-6">
            "{testimonials[index].content}"
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={testimonials[index].image}
                alt={testimonials[index].name}
                className="w-14 h-14 rounded-full border-2 border-[#960000]"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonials[index].role}
                </p>
              </div>
            </div>
            <div className="flex text-[#960000]">
              {Array.from({ length: testimonials[index].rating }).map(
                (_, i) => (
                  <Star key={i} fill="currentColor" className="w-5 h-5" />
                )
              )}
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center gap-4">
          <button
            onClick={prev}
            className="p-2 border border-[#960000] text-[#960000] rounded hover:bg-[#960000] hover:text-white"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-2 border border-[#960000] text-[#960000] rounded hover:bg-[#960000] hover:text-white"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
