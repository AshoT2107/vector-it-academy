import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NameComponent } from "./core/components/navbar/navbar.component";
@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    @if(false){
        <mat-progress-bar mode="indeterminate"></mat-progress-bar>
    }
    <main class="p-3">
        <router-outlet></router-outlet>
    </main>
    `,
    styles: [],
    imports: [RouterOutlet, MatProgressBarModule, NameComponent]
})

export class AppComponent{
  
}
