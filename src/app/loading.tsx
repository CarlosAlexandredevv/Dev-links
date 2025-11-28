import { Spinner } from '@/src/components/ui/spinner';
import { cn } from '@/lib/utils';

export default function Loading() {
  return (
    <main
      className={cn(
        'flex flex-col gap-6 items-center justify-center h-screen bg-cover bg-center bg-no-repeat',
        'bg-[url("/bg-mobile-light.jpg")] dark:bg-[url("/bg-mobile.jpg")]',
        'lg:bg-[url("/bg-desktop-light.jpg")] dark:lg:bg-[url("/bg-desktop.jpg")] px-4',
      )}
    >
      <Spinner size="lg" />
    </main>
  );
}
