import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//TODO implement this service using HTTP Iterceptor
@Injectable({providedIn: 'root'})
export class ProgressBarService {
    progressBar$ = new BehaviorSubject(true);
    
}