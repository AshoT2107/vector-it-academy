import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from "./core/components/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <app-navbar></app-navbar>
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
    styles: [],
    imports: [RouterOutlet, NameComponent]
})

export class AppComponent {
  title = 'Vector IT Academy';
}
