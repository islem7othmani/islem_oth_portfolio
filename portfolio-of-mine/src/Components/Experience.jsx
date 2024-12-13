import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "LABIT",
      duration: "July - September 2024",
      description: [
        "Designed and implemented a car wash application using the MERN stack, Transflow, Open APIs, and Tailwind CSS, featuring wait time estimation and station detection based on user location.",
    
      ],
    },
    {
      role: "Graduation Project",
      company: "Fouita",
      duration: "Feb - Jun 2023",
      description: [
        "Designed, researched, and developed a web application feature to facilitate API testing for widgets using Go, Svelte.js, Tailwind CSS, and GraphQL."
      ],
    },
    {
      role: "Backend Developer Intern",
      company: "Sapious",
      duration: "Jun - Aug 2022",
      description: [
        "Conducted a comprehensive analysis of project structure, coding conventions, and architectural patterns for a web application designed for literary writing.",

      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "Fouita",
      duration: "Jun 2022",
      description: [
        "Designed and developed a responsive web showcase page to highlight Fouita's components, utilizing Svelte.js and Tailwind CSS.",

      ],
    },
    {
      role: "Post office worker",
      company: "Post office",
      duration: "Jun 2021 - July 2021",
      description: [
        "Efficiently managed a high volume of transactions while delivering exceptional customer service by addressing diverse postal needs with expertise.",

      ],
    },
  ];
  return (
  <>
   <section className="bg-black text-white py-16 px-20 md:px-20 " id="experience">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Experience</h2>
        <p className="mt-4 text-lg text-gray-300">
          A timeline of my professional journey, showcasing roles and achievements that have shaped my career.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-black rounded-lg shadow-md p-6 hover:bg-gray-700 transition duration-300"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <span className="text-sm text-gray-400">{exp.duration}</span>
            </div>
            <h4 className="text-lg text-gray-400 mt-1">{exp.company}</h4>
            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </>
  );
}
