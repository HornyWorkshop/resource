export interface Plugin {
  uuid: string
  github: {
    owner: string
    repository: string
  }
  gameList: {
    /**
     * uuid
     */
    game: string
    regex: string[]
  }[]
}
