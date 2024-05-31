import { Component, OnInit } from '@angular/core';
import { CourseItemComponent } from '../../shared/components/course-item/course-item.component';

@Component({
    selector: 'student-courses',
    templateUrl: 'student-courses.component.html',
    standalone:true,
    imports: [CourseItemComponent]
})

export class StudentCoursesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}