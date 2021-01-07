export interface IToken {
  email : string
  accessToken: string;
  refreshToken: string;
  refreshTokenExpiryTime :Date
  userType:string
}
