import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NameComponent } from "./core/components/navbar/navbar.component";
import { LayoutService, LayoutType } from './core/layouts/layouts.service';
import { AsyncPipe } from '@angular/common';
import { ClassicLayoutComponent } from "./core/layouts/classic.component";
import { EmptyLayoutComponent } from "./core/layouts/empty.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    @switch (layoutService.layoutType$ | async) {
      @case (layoutTypes.Classic) {
        <classic-layout/>
      }
      @case (layoutTypes.Empty) {
        <empty-layout/>
      }
    }`,
    styles: [],
    imports: [RouterOutlet, NameComponent, AsyncPipe, ClassicLayoutComponent, EmptyLayoutComponent]
})

export class AppComponent {
  
  layoutService = inject(LayoutService);
  layoutTypes = LayoutType;
}
