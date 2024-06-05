import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { MentorComponent } from './mentor/mentor.component';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = 
[
    { path: 'admin', component: AdminComponent },
    { path: 'mentor', component: MentorComponent},
    { path: 'students', component: StudentsComponent},
    { path: '**', redirectTo: "not-found"},
    { path: 'not-found', component: NotFoundComponent}
];
