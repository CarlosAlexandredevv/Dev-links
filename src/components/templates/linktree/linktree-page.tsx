import { cn } from '@/src/lib/utils';
import { Avatar } from '@/src/components/avatar';
import { Switch } from '@/src/components/ui/switch';

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
      <Switch />
    </main>
  );
}
