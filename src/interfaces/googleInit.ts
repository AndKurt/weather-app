export interface ProfileObj {
  googleId: string
  imageUrl: string
  email: string
  name: string
  givenName: string
}

export interface IGoogleInit {
  accessToken: string
  profileObj: ProfileObj
}
