import React from "react";
import { GithubIcon, TwitterIcon, MessageCircleIcon } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "Discord",
      icon: MessageCircleIcon,
      url: "https://discord.gg/openhr",
      color: "hover:text-indigo-400",
    },
    {
      name: "Twitter",
      icon: TwitterIcon,
      url: "https://twitter.com/openhr",
      color: "hover:text-brand-cyan",
    },
    {
      name: "GitHub",
      icon: GithubIcon,
      url: "https://github.com/openhr",
      color: "hover:text-brand-teal",
    },
  ];
  return (
    <footer className="bg-slate-950 border-t border-brand-cyan/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="flex items-center justify-center space-x-8 mb-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${link.color} transition-colors hover:scale-110 transform`}
                aria-label={link.name}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        {/* MIT License */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Open source, <span className="text-brand-cyan">MIT</span> License
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © 2024 OpenHR. Built with ❤️ by the community.
          </p>
        </div>
      </div>
    </footer>
  );
}
