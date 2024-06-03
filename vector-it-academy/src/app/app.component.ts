import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from "./core/components/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <app-navbar></app-navbar>
  <main class="p-3">
    <router-outlet />
  </main>
  `,
    styles: [],
    imports: [RouterOutlet, NameComponent]
})

export class AppComponent {
  title = 'Vector IT Academy';
}
