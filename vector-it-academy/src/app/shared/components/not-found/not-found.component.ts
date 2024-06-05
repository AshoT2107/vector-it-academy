import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService, LayoutType } from '../../../core/layouts/layouts.service';

@Component({
    selector: 'not-found',
    template: `
    <h1>404 Error Page #2</h1>
<p class="zoom-area"><b>Kechirasiz</b> Siz adashgan kurinasiz</p>
<section class="error-container">
  <span class="four"><span class="screen-reader-text">4</span></span>
  <span class="zero"><span class="screen-reader-text">0</span></span>
  <span class="four"><span class="screen-reader-text">4</span></span>
</section>
<div class="link-container">
  <a [routerLink]="['/students']" class="more-link">Ortga qaytish</a>
</div>`,
    styleUrl: 'not-found.component.scss',
    standalone: true,
    imports: [RouterLink]
})

export class NotFoundComponent implements OnInit{

  layoutService = inject(LayoutService);

  ngOnInit(): void {
    this.layoutService.layoutType$.next(LayoutType.Empty);
  }
}