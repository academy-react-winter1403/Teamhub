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
    title: string
    key: number
    currentView: number
    insertDate: string
    miniDescribe: string
    currentImageAddressTumb: string
  }
  export interface blogProps {
    blogState: INews
  }
  