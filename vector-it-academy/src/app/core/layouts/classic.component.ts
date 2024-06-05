import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from "../components/navbar/navbar.component";

@Component({
    selector: 'classic-layout',
    template: `
  <app-navbar></app-navbar>
  <main class="p-3">
    <router-outlet />
  </main>`,
    standalone: true,
    imports: [
        RouterOutlet,
        NameComponent]
})

export class ClassicLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}