'use client';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}
export function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <button className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-highlight transition-colors duration-300 cursor-pointer">
      <a
        className="text-2xl cursor-pointer text-black dark:text-white flex items-center justify-center"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    </button>
  );
}
