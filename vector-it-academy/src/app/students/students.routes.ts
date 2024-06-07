import { Routes } from '@angular/router';
import { courseResolver } from './resolvers/course.resolver';

export default [
    {
        path: '', 
        pathMatch: "full",
        redirectTo: "courses"
    },
    { 
        path: 'courses', 
        loadComponent: () => import('./students.component').then(c => c.StudentsComponent),
        
    },
    {
        path: "courses/:id",
        resolve: {courseDetails: courseResolver},
        loadComponent: ()=>import("./student-courses/course-details/course-details.component")
    }
] as Routes