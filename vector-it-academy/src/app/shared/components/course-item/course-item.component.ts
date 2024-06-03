import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ICourse } from '@models/shared/i-course';

@Component({
    selector: 'app-course-item',
    templateUrl: 'course-item.component.html',
    standalone: true,
    imports: [MatButtonModule]
})

export class CourseItemComponent implements OnInit {
    @Input() item!: ICourse;
    @Input() purchased: boolean = false;
    ngOnInit() { }
}