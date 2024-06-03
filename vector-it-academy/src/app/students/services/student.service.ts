import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICourse } from '@models/shared/i-course';
import { Observable, of } from 'rxjs';

export interface ICoursesResponse{
    purchased: ICourse[];
    others: ICourse[];
}

const res:ICoursesResponse= {
    purchased: [{
        id: "assdasda",
        name: "Angular Advanced",
        desc: "akjflalskhf askldjklsajd kljasdkljsakl daksjdklsaj aslkjfklasjfkl aflskjklajflkdjl afdfsdfsdf",
        mentorId: "mentorid123",
        mentorName: "Umar Sadullayev",
        imgSrc: "assets/images/angular.svg",
        //DEATILS
        tariffs: [],
        links: [],
        lessons: [],
    }],
    others: [{
        id: "assdasda",
        name: "React Advanced",
        desc: "akjflalskhf askldjklsajd kljasdkljsakl daksjdklsaj aslkjfklasjfkl aflskjklajflkdjl afdfsdfsdf",
        mentorId: "mentorid123",
        mentorName: "Doniyor London",
        imgSrc: "assets/images/angular.svg",
        //DEATILS
        tariffs: [],
        links: [],
        lessons: [],
    },
    {
        id: "assdasda",
        name: "Nodejs Advanced",
        desc: "akjflalskhf askldjklsajd kljasdkljsakl daksjdklsaj aslkjfklasjfkl aflskjklajflkdjl afdfsdfsdf",
        mentorId: "mentorid123",
        mentorName: "Doniyor Husniddin",
        imgSrc: "assets/images/angular.svg",
        //DEATILS
        tariffs: [],
        links: [],
        lessons: [],
    }]
};

@Injectable({providedIn: 'root'})
export class StudentsService {
    private httpClient$ = inject(HttpClient)
    
    getAllCourses(): Observable<{purchased: ICourse[]; others: ICourse[]}>{
        // return this.httpClient$.get<{purchased: ICourse[]; others: ICourse[]}>('api')
        return of(res);
    }
}