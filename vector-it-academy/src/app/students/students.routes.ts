import { Routes } from '@angular/router';

export default [
    { 
        path: '', 
        pathMatch: "full",
        loadComponent: ()=>import('./students.component').then(c => c.StudentsComponent)
    },
    {
        path: 'course-item',
        loadComponent: () => import("../shared/components/course-item/course-item.component").then(c=>c.CourseItemComponent)
    }
] as Routes