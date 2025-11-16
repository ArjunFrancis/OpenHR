import React from "react";
import {
  MailIcon,
  LinkedinIcon,
  BookOpenIcon,
  MessageSquareIcon,
  CodeIcon,
} from "lucide-react";
export function SyncSkillsSection() {
  const platforms = [
    {
      name: "Email",
      icon: MailIcon,
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
    },
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "Substack",
      icon: BookOpenIcon,
      bgColor: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
    },
    {
      name: "Slack",
      icon: MessageSquareIcon,
      bgColor: "bg-purple-500",
      hoverColor: "hover:bg-purple-600",
    },
    {
      name: "Dev Communities",
      icon: CodeIcon,
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
    },
  ];
  return (
    <section className="relative bg-slate-900 py-20 px-6">
      {/* Top glow divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Dock-style container */}
        <div className="flex flex-col items-center justify-center">
          {/* Platform Icons Dock */}
          <div className="relative mb-6">
            {/* Dock background with glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 via-brand-teal/10 to-brand-cyan/10 rounded-full blur-xl" />

            <div className="relative flex items-center gap-3 px-6 py-4 bg-slate-800/80 backdrop-blur-xl rounded-full border border-brand-cyan/20 shadow-2xl">
              {platforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <button
                    key={platform.name}
                    className={`group relative w-12 h-12 ${platform.bgColor} ${platform.hoverColor} rounded-full flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 shadow-lg`}
                    title={platform.name}
                  >
                    <Icon className="w-6 h-6 text-white" />
                    <div
                      className={`absolute inset-0 ${platform.bgColor} rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-opacity`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sync text */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Sync your skills
            </h3>
            <p className="text-gray-400 max-w-xl">
              Connect your profiles, get matched automatically
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
