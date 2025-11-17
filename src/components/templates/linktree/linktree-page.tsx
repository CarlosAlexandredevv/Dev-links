import { cn } from '@/src/lib/utils';

export function LinktreePage() {
  return (
    <main
      className={cn(
        'flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat',
        'bg-[url("/bg-mobile-light.jpg")] dark:bg-[url("/bg-mobile.jpg")]',
        'lg:bg-[url("/bg-desktop-light.jpg")] dark:lg:bg-[url("/bg-desktop.jpg")]',
      )}
    >
      LinktreePage
    </main>
  );
}
