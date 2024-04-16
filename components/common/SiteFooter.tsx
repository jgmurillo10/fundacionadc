import Image from "next/image";
import React from "react";
import { FaXTwitter, FaInstagram, FaSlack, FaYoutube } from "react-icons/fa6";

/**
 * This footer is not part of the content in the CMS, feel free to remove this for production use.
 */

const SiteFooter = () => {
  // set up Agility CMS Socials
  const socials = [
    {
      title: "X (Twitter)",
      url: "https://www.twitter.com/agilitycms",
      icon: (
        <FaXTwitter className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/agilitycms",
      icon: (
        <FaInstagram className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "Slack",
      url: "https://agilitycms.com/join-slack",
      icon: (
        <FaSlack className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
    {
      title: "YouTube",
      url: "https://www.youtube.com/@AgilityCMS",
      icon: (
        <FaYoutube className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />
      ),
    },
  ];

  return (
    <footer className="relative px-8 py-6 md:py-4 mt-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto md:flex md:items-center">
        <div className="flex-grow mb-4 md:mb-0">
          <p className="text-center md:text-left text-gray-600 text-xs md:ml-8 md:max-w-3xl">
            Hecho con 🫶 por Juan Murillo. Powered by Agility.
            {"\u00A0"}
            <a
              href="https://juanmurillo.co/"
              title="Pagina personal"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 mr-2 border-b border-gray-600"
            >
              Juan Murillo
            </a>
          </p>
        </div>
        {/* <div className="flex-1-grow">
          <ul className="flex justify-center md:justify-start">
            {socials.map((social, index) => (
              <li key={index} className="mx-4 md:mx-0">
                <a
                  href={social.url}
                  title={`Follow Agility CMS on ${social.title}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </footer>
  );
};

export default SiteFooter;
