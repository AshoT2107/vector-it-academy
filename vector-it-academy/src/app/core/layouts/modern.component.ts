import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NameComponent } from "../components/navbar/navbar.component";

@Component({
  selector: "modern-layout",
  template: ` <app-navbar></app-navbar>
    <main class="p-3">
      <router-outlet />
    </main>`,
  standalone: true,
  imports: [RouterOutlet, NameComponent],
})
export class ModernLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
