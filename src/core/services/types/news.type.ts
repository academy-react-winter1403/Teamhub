  
  export interface INews {
    id: number
    title: string
    describe: string
    key: number
    currentView: number
    insertDate: string
    miniDescribe: string
    currentImageAddressTumb: string
    currentImageAddress: string
    currentLikeCount: number
    currentDissLikeCount: number
    addUserFullName: string
    isCurrentUserFavorite: boolean
    currentUserIsLike: boolean
    currentUserIsDissLike: boolean
    currentUserSetRate: boolean
    currentUserRateNumber: number
  }
  export interface blogProps {
    blogState: INews
  }
  