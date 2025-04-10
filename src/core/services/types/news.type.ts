// export interface INews{
  
//   addUserFullName:string
//   addUserProfileImage:string
//   currentDissLikeCount:string
//   currentImageAddressTumb:string |null
//   currentLikeCount:number
//   currentRate:number
//   currentUserFavoriteId:string
//   currentUserIsDissLike:boolean
//   currentUserIsLike:boolean
//   currentUserRateNumber:number
//   currentUserSetRate:boolean
//   currentView:number
//   id:string
//   insertDate:string
//   isActive:boolean
//   isCurrentUserFavorite:boolean
//   keyword:string
//   likeId:string
//   miniDescribe:string
//   newsCatregoryId:number
//   newsCatregoryName:string
//   title:string
//   totalCount:number
//   updateDate:string
//   }

 
  
  export interface INews {
    id: string
    title: string
    miniDescribe: string
    keyword: string
    currentRate: number
    currentView: number
    currentLikeCount: number
    currentImageAddressTumb?: string
    insertDate: string
    updateDate: string
    addUserFullName: string
    addUserProfileImage: string
    newsCatregoryId: number
    newsCatregoryName: string
    currentUserIsLike: boolean
    likeId: string
    isCurrentUserFavorite: boolean
    currentUserFavoriteId: string
    currentUserSetRate: boolean
    currentUserRateNumber: number
    currentUserIsDissLike: boolean
    currentDissLikeCount: number
    isActive: boolean
    totalCount: number
  }
  