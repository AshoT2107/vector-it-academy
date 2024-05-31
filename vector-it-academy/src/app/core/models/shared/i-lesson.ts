import { ILink } from "./i-link";

export interface ILesson {
    id: string;
    name: string;
    desc: string;
    date: Date;
    links: ILink[];
}
