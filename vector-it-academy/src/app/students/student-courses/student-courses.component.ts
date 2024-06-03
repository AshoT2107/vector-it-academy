import { Component, OnInit, inject } from '@angular/core';
import { CourseItemComponent } from '../../shared/components/course-item/course-item.component';
import { ICoursesResponse, StudentsService } from '../services/student.service';

@Component({
    selector: 'student-courses',
    templateUrl: 'student-courses.component.html',
    standalone:true,
    imports: [CourseItemComponent]
})

export class StudentCoursesComponent implements OnInit {
    studentService = inject(StudentsService);

    allCourses?: ICoursesResponse;
    ngOnInit() {
        this.studentService.getAllCourses().subscribe((courses)=>{
            this.allCourses = courses;
        });
     }
}