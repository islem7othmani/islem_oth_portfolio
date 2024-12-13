import React from "react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Management Computing",
      institution: "Higher Institute of Computer Science and Management Kairouan",
      duration: "2020 - 2023",
      achievements: [
        "Graduated with honors.",
        "Completed projects on web applications.",
        "Active member of the Software Development Club (Google Club).",
      ],
    },
    {
      degree: "Software Engineering",
      institution: "Higher Institute of Applied Science and Technology Sousse",
      duration: "2023 - Present",
      achievements: [
        "Completed multiple projects focusing on full-stack web development, software optimization, and user-centric design.",
        "Active member of the Software Development Club, collaborating on hackathons and coding challenges.",
    
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-8 md:px-20" id="education">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Education</h2>
        <p className="mt-4 text-lg text-gray-400">
          A summary of my academic milestones and achievements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-purple-800 rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <h4 className="text-lg text-gray-400 mt-1">{edu.institution}</h4>
            <span className="text-sm text-gray-500">{edu.duration}</span>
            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
              {edu.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
