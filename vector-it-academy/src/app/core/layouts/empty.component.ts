import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'empty-layout',
    template: `<router-outlet></router-outlet>`,
    standalone:true,
    imports: [
        RouterOutlet
    ]
})

export class EmptyLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}