export interface NavbarLink {
    title: string;
    path: string;
}

export interface LandingHero {
    title: string;
}

export interface LandingService {
    title: string;
    desc: string;
}

export interface LandingCtg {
    title: string;
    desc: string;

}

export interface FooterData {
    title: string;
}

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

export interface CourseListHero {
    title: string;
}

export interface CourseState{
    title: string
    teacherName: string
    cost: number
    describe: string
    courseId: string;
    tumbImageAddress: string
  }
export interface CourseState2{
    title: string
    teacherName: string
    cost: number
    techName: string
    levelName: string
    technologyList: string
  }

export interface Auth{
    title: string;
}

