import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum LayoutType{
    Classic, Modern
}

@Injectable({providedIn: 'root'})
export class LayoutService {
    layoutType$ = new BehaviorSubject(LayoutType.Modern);
}