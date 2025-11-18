import Image from 'next/image';
import { cn } from '@/src/lib/utils';

export function AvatarDark() {
  return (
    <div className="gap-2 hidden dark:flex flex-col items-center justify-center">
      <Image
        src="/avatar"
        alt="Avatar"
        width={112}
        height={112}
        className={cn(
          'rounded-full object-cover object-center w-32 h-32 border-stroke border-2',
          'dark:border-stroke-dark',
          'hidden dark:block',
        )}
      />
      <span className="text-md text-white">@Carlosalexandredevv</span>
    </div>
  );
}
