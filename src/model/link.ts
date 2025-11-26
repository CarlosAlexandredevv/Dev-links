export interface PrismicWebLinkField {
  link_type: string;
  key?: string;
  url: string;
  target?: string | null;
}

export interface DevlinkButton {
  label: string;
  url: PrismicWebLinkField;
}
