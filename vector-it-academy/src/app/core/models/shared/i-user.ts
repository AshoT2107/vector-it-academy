import { Roles } from "./roles";

export interface IUser{
    id: string,
    username: string,
    email?:string,
    first_name: string,
    last_name: string,
    signing_date: Date,
    roles: Roles[],
    password?: string
}