import { ILesson } from "./i-lesson";
import { ILink } from "./i-link";
import { ITariff } from "./i-tariff";

export interface ICourse{
    id: string;
    name: string;
    desc: string;
    mentorId: string;
    links: ILink[];
    tariffs: ITariff[];
    lessons: ILesson[];
}

