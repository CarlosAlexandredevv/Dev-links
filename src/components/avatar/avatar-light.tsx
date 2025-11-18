import Image from 'next/image';
import { cn } from '@/lib/utils';

export function AvatarLight() {
  return (
    <div className="flex flex-col items-center justify-center dark:hidden gap-2">
      <Image
        src="/avatar-light.png"
        alt="Avatar"
        width={112}
        height={112}
        className={cn(
          'rounded-full object-cover object-center w-32 h-32 border-stroke border-2',
          'dark:hidden',
        )}
      />
      <span className="text-md text-black">@Carlosalexandredevv</span>
    </div>
  );
}
