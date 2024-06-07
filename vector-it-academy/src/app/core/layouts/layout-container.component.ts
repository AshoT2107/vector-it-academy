import { Component, OnInit, inject } from '@angular/core';
import { ClassicLayoutComponent } from './classic.component';
import { LayoutService, LayoutType } from './layouts.service';
import { ModernLayoutComponent } from "./modern.component";

@Component({
    selector: 'layout-container',
    template: `
    @if(layoutValue === layoutTypes.Classic){
      <classic-layout/>
    }@else{
      <modern-layout/>
    }`,
    standalone: true,
    imports: [ClassicLayoutComponent, ModernLayoutComponent]
})

export default class LayoutContainerComponent implements OnInit {
    layoutService = inject(LayoutService);
  layoutTypes = LayoutType;
  layoutValue = this.layoutService.layoutType$.value;

  ngOnInit(): void {
    this.layoutService.layoutType$.subscribe(value=>{
      this.layoutValue = value;
      console.log(value);
    })
  }
}