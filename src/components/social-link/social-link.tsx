interface SocialLinkProps {
  label: string;
  url: string;
}

export function SocialLink({ label, url }: SocialLinkProps) {
  const iconsMappedByLabel = {
    GitHub: <ion-icon name="logo-github"></ion-icon>,
    Instagram: <ion-icon name="logo-instagram"></ion-icon>,
    YouTube: <ion-icon name="logo-youtube"></ion-icon>,
    Linkedin: <ion-icon name="logo-linkedin"></ion-icon>,
  };

  const icon = iconsMappedByLabel[label as keyof typeof iconsMappedByLabel];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-highlight transition-colors duration-300 cursor-pointer"
    >
      <button className="text-2xl cursor-pointer text-black dark:text-white flex items-center justify-center">
        {icon}
      </button>
    </a>
  );
}
