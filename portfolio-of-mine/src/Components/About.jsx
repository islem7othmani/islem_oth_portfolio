import React from "react";

export const About = () => {
  const tools = [
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Node.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      name: "MongoDB",
      logo: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      name: "Git",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "Next.js",
      logo: "https://img.icons8.com/fluent-systems-filled/200/FFFFFF/nextjs.png",
    },
    {
      name: "GraphQL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    },
    {
      name: "SpringBoot",
      logo: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
    },
    {
      name: "MySQL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJp2aVq2_yL4lgoL4qbiVocx7nuwpb8DkRVA&s",
    },
    {
      name: "Svelte.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
    },
  ];

  return (
    <section className="relative bg-black  mb-10 rounded-[15px] py-[73px] mt-[129px] mx-[10%] z-10 px-12" id="about">
      <section className="bg-black text-white py-10 px-5 md:px-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-lg text-white">
            I am a passionate Software Engineer skilled in both <strong>frontend</strong> and <strong>backend</strong> development.
            With experience in designing user-friendly interfaces in <strong>Figma</strong> and writing insightful
            tech articles, I aim to bridge the gap between functionality and aesthetics.
            Whether building robust APIs or crafting pixel-perfect designs, I love bringing ideas to life.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-white text-center">Tools I Master</h3>
          <div className="mt-6 flex flex-wrap justify-center gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-[100px] hover:scale-110 transition transform duration-300"
              >
                <img
                  src={tool.logo}
                  alt={`${tool.name} Logo`}
                  className="w-[70px] h-[70px] object-contain"
                />
                <p className="mt-2 text-gray-700 text-sm font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}; 
