import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum LayoutType{
    Classic, Empty
}

@Injectable({providedIn: 'root'})
export class LayoutService {
    layoutType$ = new BehaviorSubject(LayoutType.Classic);
}