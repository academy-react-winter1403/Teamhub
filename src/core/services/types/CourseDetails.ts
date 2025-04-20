export interface CourseDetailsType {
    teacherName: string;
    statusName: string;
    levelName: string;
    cost: number;
    title: string;
    currentRegistrants: number;
    likeCount: number;
    commandCount: number;
    userIsLiked: boolean;
    userLikedId: string;
    userFavorite: boolean;
    userFavoriteId: string;
    courseRate: number;
    describe: string;
    tumbImageAddress: string | null;
    lastUpdate: string; // یا می‌توانید از نوع Date استفاده کنید اگر آن را پارس می‌کنید
    courseId: string;
    technologyList: string;
    dissLikeCount: number;
    currentUserDissLike: boolean;
    currentUserSetRate: boolean;
    currentUserRateNumber: number;
}