import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ICourse } from '@models/shared/i-course';

@Component({
    selector: 'app-course-item',
    templateUrl: 'course-item.component.html',
    standalone: true,
    imports: [MatButtonModule, RouterLink]
})

export class CourseItemComponent implements OnInit {
    router = inject(Router);
    route = inject(ActivatedRoute);
    @Input() item!: ICourse;
    @Input() purchased: boolean = false;
    ngOnInit() { }

    onButtonClick(itemId: string):void{
        console.log(itemId);
        this.router.navigate([itemId], {queryParams: {test1: 20, test2: 30}, relativeTo: this.route})
    }
}