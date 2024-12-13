import React from "react";

const ContactSection = () => {
  return (
    <section className="contact-section p-8 bg-black text-white" id="contact">
      <h2 className="text-4xl font-bold text-center mb-8 text-purple-400">Contact Me</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="contact-details p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Get in Touch</h3>
          <p className="text-gray-300 mb-6">
            I'd love to hear from you! Whether you have a question, a project idea, or just want to chat, feel free to reach out.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-purple-500 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7 7 7-7"
                />
              </svg>
              <span>Email: </span>
              <a
                href="mailto:yourname@example.com"
                className="text-purple-400 hover:underline ml-2"
              >
                islemothmani159@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-purple-500 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7 7 7-7"
                />
              </svg>
              <span>Phone: </span>
              <span className="ml-2">+216 56 212 806</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-purple-500 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7 7 7-7"
                />
              </svg>
              <span>Location: </span>
              <span className="ml-2">Sousse, Tunisia</span>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="social-media-links p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Follow Me</h3>
          <p className="text-gray-300 mb-6">
            Stay connected with me through my social media channels.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <a
                href="https://www.linkedin.com/in/islem1othmani/"
                className="text-purple-400 hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-purple-500 mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7 7 7-7"
                  />
                </svg>
                LinkedIn
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://www.behance.net/directiislem"
                className="text-purple-400 hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-purple-500 mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7 7 7-7"
                  />
                </svg>
                Behance
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://github.com/islem7othmani"
                className="text-purple-400 hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-purple-500 mr-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7 7 7-7"
                  />
                </svg>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
