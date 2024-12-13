import React from "react";

const AssociativeWorks = () => {
  const works = [
    {
      title: "Head of business and events Department at Microsoft ISSATSO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt023-c8ClZjqC4YgeSuBSE0uN5HUfI22PoQ&s",
    },
    {
      title: "Lead of Organisation committee at CyberTrace ISSATSO",

      image: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-1/302598322_491468852986286_5547244782888560595_n.png?stp=dst-png_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=C6hOjPRBiZUQ7kNvgEzwWOu&_nc_zt=24&_nc_ht=scontent.ftun1-2.fna&_nc_gid=ArXOkG6x3iDV6SRhM-GE6wi&oh=00_AYDDWLpPuq-dpP-QO0tgxaNvZLNSyoJnPcqricm7mtpmqA&oe=6743F0AA",
    },
    {
      title: "Secretary General at Google club ISIGK",

      image: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-1/304773764_506526208139918_5511174796756167912_n.png?stp=dst-png_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=ZATOIlSCMrQQ7kNvgEJtKE1&_nc_zt=24&_nc_ht=scontent.ftun1-2.fna&_nc_gid=Aw9Wsqd_Sa9r0tix0u88ykN&oh=00_AYAwIApdcZNNtlZ5s-2lrpM2GOqcQG4N9-IDZN-u72NZmQ&oe=67440F5C",
    },
    {
      title: "Sponsoring Manager at Google club ISIGK",
   
      image: "https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-1/304773764_506526208139918_5511174796756167912_n.png?stp=dst-png_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=ZATOIlSCMrQQ7kNvgEJtKE1&_nc_zt=24&_nc_ht=scontent.ftun1-2.fna&_nc_gid=Aw9Wsqd_Sa9r0tix0u88ykN&oh=00_AYAwIApdcZNNtlZ5s-2lrpM2GOqcQG4N9-IDZN-u72NZmQ&oe=67440F5C",
    },
  ];

  return (
    <section className="associative-works p-8 bg-gray-900 dark:bg-gray-800" id="associativeworks">
    <h2 className="text-3xl font-bold text-center text-white mb-8">
      Associative Works
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {works.map((work, index) => (
        <div
          key={index}
          className="work-card bg-gray-800 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col items-center p-6">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mb-4">
              <img
                src={work.image}
                alt={work.title}
                className="w-20 h-20 object-contain rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 text-center">
              {work.title}
            </h3>
            <p className="text-gray-400 text-sm text-center">
              {work.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default AssociativeWorks;
