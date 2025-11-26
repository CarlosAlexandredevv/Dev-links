import Image from 'next/image';
import { cn } from '@/lib/utils';
import { AvatarLight as AvatarLightModel } from '@/model/avatar';

interface AvatarLightProps {
  avatar_light: AvatarLightModel;
}

export function AvatarLight({ avatar_light }: AvatarLightProps) {
  return (
    <div className="flex flex-col items-center justify-center dark:hidden gap-2">
      <Image
        src={avatar_light.url}
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
