import { cn } from '@/lib/utils';
import { Avatar } from '@/components/avatar';
import { ToogleTheme } from '../../toogle-theme';
import { Button } from '@/components/button';
import { buttonLinks } from '@/components/button';
import { socialItems } from '@/components/social-link/social-items';

export function LinktreePage() {
  return (
    <main
      className={cn(
        'flex flex-col gap-6 items-center justify-center h-screen bg-cover bg-center bg-no-repeat',
        'bg-[url("/bg-mobile-light.jpg")] dark:bg-[url("/bg-mobile.jpg")]',
        'lg:bg-[url("/bg-desktop-light.jpg")] dark:lg:bg-[url("/bg-desktop.jpg")] px-4',
      )}
    >
      <Avatar />
      <ToogleTheme />
      <div className="flex flex-col gap-4 max-w-[540px] w-full">
        {buttonLinks.map((link) => (
          <Button key={link.href} href={link.href}>
            {link.label}
          </Button>
        ))}
      </div>

      {/* <div className="flex gap-4 py-6">
        {socialItems.map((item) => (
          <SocialLink key={item.href} href={item.href} icone={item.icone} />
        ))}
      </div> */}
    </main>
  );
}
