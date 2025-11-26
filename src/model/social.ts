import { PrismicWebLinkField } from '@/model/link';

export interface DevlinkSocial {
  label: string;
  url: PrismicWebLinkField;
  icon: Record<string, unknown>;
}
