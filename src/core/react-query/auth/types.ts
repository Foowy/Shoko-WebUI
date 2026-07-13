export type LoginRequestType = {
  user: string;
  pass: string;
  device: string;
  rememberUser: boolean;
};

export type OidcConfigType = {
  Enabled: boolean;
  DisplayName: string;
};
