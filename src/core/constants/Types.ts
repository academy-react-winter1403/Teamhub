export interface Teacher {
    name: string;
    field: string;
    image: string;
}  

export interface Article {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    views: number;
  }

export interface NavbarLink {
    title: string;
    path: string;
}

export interface CourseInfos {
    title: string;
    description: string;
    favorite: number;
    studentCount: number;
    status: string;
    startDate:string;
    endDate:string;
    lessons:number;
    hour:string;
}