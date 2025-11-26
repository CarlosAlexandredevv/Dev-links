import {
  AvatarDark as AvatarDarkModel,
  AvatarLight as AvatarLightModel,
} from '@/model/avatar';
import { AvatarLight } from './avatar-light';
import { AvatarDark } from './avatar-dark';
interface AvatarProps {
  avatar: AvatarDarkModel;
  avatar_light: AvatarLightModel;
}

export function Avatar({ avatar, avatar_light }: AvatarProps) {
  return (
    <>
      <AvatarLight avatar_light={avatar_light} />
      <AvatarDark avatar={avatar} />
    </>
  );
}
