import { Injectable, inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { ICourse } from '@models/shared/i-course';
import { Observable } from 'rxjs';
import { StudentsService } from '../services/student.service';

export const courseResolver: ResolveFn<ICourse | undefined> = (route: ActivatedRouteSnapshot) : Observable<ICourse | undefined> =>
{
    const studentService = inject(StudentsService);
    const courseId = route.params["id"];

    return studentService.getCourse(courseId);
}