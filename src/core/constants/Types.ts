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