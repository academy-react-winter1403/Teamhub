export interface ProfileData {
  birthDay: string;
  currentPictureAddress: string;
  email: string;
  fName: string | null;
  gender: boolean;
  homeAdderess: string | null;
  lName: string | null;
  latitude: number | null;
  linkdinProfile: string | null;
  longitude: number | null;
  nationalCode: string | null;
  phoneNumber: string;
  profileCompletionPercentage: number;
  receiveMessageEvent: boolean;
  telegramLink: string | null;
  userAbout: string | null;
  userImage: UserImage[];
}

interface UserImage {
  id: string;
  userProfileId: number;
  pictureName: string;
  pictureAddress: string;
  inserDate: string;
}

export interface News {
  title: string;
  currentImageAddressTumb: string | null;
  currentRate: number;
  currentView: number;
  newsId: string;
  favoriteId: string;
  currentLikeCount: number;
  updateDate: string;
}

export interface Course {
  id: string;
  title: string;
  lastUpdate: string;
  currentImageAddressTumb?: string | null;
  currentRate?: number;
  currentView?: number;
  favoriteId?: string;
  currentLikeCount?: number;
}

export interface Comment {
  id: string;
  content: string;
  date: string;
  newsId?: string;
  courseId?: string;
}

export interface SecurityInfo {
  recoveryEmail: string | null;
  recoveryPhone: string | null;
}

export interface PaginatedResponse<T> {
  [key: string]: T[] | number;
  totalCount: number;
}

export interface OperationResponse {
  success: boolean;
  message?: string;
}
