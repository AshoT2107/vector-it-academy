import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    standalone: true,
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatBadgeModule],
})

export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}