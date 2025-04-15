export interface TopCourse {
    teacherName: string;
    classRoomName: string;
    typeName: string;
    statusName: string;
    levelName: string;
    cost: number;
    dissLikeCount: number;
    likeCount: number;
    commandCount: number;
    userIsLiked: boolean;
    userIsDissLiked: boolean;
    isCourseReseve: boolean;
    isUserFavorite: boolean;
    courseReseveId: string;
    userFavoriteId: string;
    userLikeId: string;
    currentUserSetRate: boolean;
    currentUserRateNumber: number;
    courseRate: number;
    title: string;
    describe: string;
    tumbImageAddress: string;
    lastUpdate: string;
    courseId: string;
  }