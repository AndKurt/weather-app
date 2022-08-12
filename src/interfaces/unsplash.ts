interface Urls {
  full: string
  regular: string
}

interface Result {
  urls: Urls
}

export interface IUnsplashResponse {
  results: Result[]
}

export interface IBackgrounds {
  bg1: string
  bg2: string
}
