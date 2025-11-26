import { cn } from '@/lib/utils';
import { Avatar } from '@/components/avatar';
import { ButtonLinks } from '@/components/button-link';
import { buttonLinks } from '@/components/button-link';
import { SocialLink } from '@/components/social-link';
import { socialLinks } from '@/components/social-link/social-links';
import { ToggleTheme } from '@/components/toggle-theme';
import { fetchDevlinksDocument } from '@/services/prismic';

export async function LinktreePage() {
  const { data } = await fetchDevlinksDocument();

  return (
    <main
      className={cn(
        'flex flex-col gap-6 items-center justify-center h-screen bg-cover bg-center bg-no-repeat',
        'bg-[url("/bg-mobile-light.jpg")] dark:bg-[url("/bg-mobile.jpg")]',
        'lg:bg-[url("/bg-desktop-light.jpg")] dark:lg:bg-[url("/bg-desktop.jpg")] px-4',
      )}
    >
      <Avatar avatar={data.avatar} avatar_light={data.avatar_light} />
      <ToggleTheme />
      <div className="flex flex-col gap-4 max-w-[540px] w-full">
        {buttonLinks.map((link) => (
          <ButtonLinks key={link.href} href={link.href}>
            {link.label}
          </ButtonLinks>
        ))}
      </div>

      <div className="flex gap-4 ">
        {socialLinks.map((social) => (
          <SocialLink
            key={social?.href}
            href={social?.href}
            icon={social?.icon}
          />
        ))}
      </div>
    </main>
  );
}
