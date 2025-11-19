import { cn } from '@/lib/utils';
import { Avatar } from '@/components/avatar';
import { ToogleTheme } from '../../toogle-theme';
import { Button } from '@/components/button/button';

const links = [
  {
    label: 'Veja meu trabalho no LinkedIn',
    href: 'https://www.linkedin.com/in/carlos-alexandre-375a9227b/',
  },
  {
    label: 'Veja meu trabalho no Github',
    href: 'https://github.com/CarlosAlexandredevv',
  },
  {
    label: 'Entre em contato comigo',
    href: 'mailto:carlosalexandredevv@gmail.com',
  },
];

export function LinktreePage() {
  return (
    <main
      className={cn(
        'flex flex-col gap-6 items-center justify-center h-screen bg-cover bg-center bg-no-repeat',
        'bg-[url("/bg-mobile-light.jpg")] dark:bg-[url("/bg-mobile.jpg")]',
        'lg:bg-[url("/bg-desktop-light.jpg")] dark:lg:bg-[url("/bg-desktop.jpg")]',
      )}
    >
      <Avatar />
      <ToogleTheme />
      {links.map((link) => (
        <Button key={link.href} href={link.href}>
          {link.label}
        </Button>
      ))}
    </main>
  );
}
