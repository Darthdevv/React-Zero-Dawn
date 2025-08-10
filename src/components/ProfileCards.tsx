// components/ProfileCards.tsx
import React from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

type SocialLinks = {
  linkedin?: string;
  x?: string;
};

type Profile = {
  name: string;
  role: string;
  description: string;
  image: string;
  socials?: SocialLinks;
};

interface ProfileCardsProps {
  profiles: Profile[];
}

const ProfileCards: React.FC<ProfileCardsProps> = ({ profiles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {profiles.map((profile, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl overflow-hidden shadow-lg group"
        >
          {/* Image */}
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-80 object-cover"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Text content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-sm font-medium opacity-90">{profile.role}</p>
            <p className="mt-1 text-sm opacity-80 line-clamp-3">
              {profile.description}
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-3">
              {profile.socials?.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
              )}
              {profile.socials?.x && (
                <a
                  href={profile.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <FaXTwitter size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCards;
