import { AvatarDark, AvatarLight } from '@/model/avatar';
import { DevlinkButton } from '@/model/link';
import { DevlinkSocial } from '@/model/social';

export interface DevlinksData {
  avatar: AvatarDark;
  avatar_light: AvatarLight;
  links: DevlinkButton[];
  social: DevlinkSocial[];
}

export interface DevlinksDocument {
  data: DevlinksData;
}
