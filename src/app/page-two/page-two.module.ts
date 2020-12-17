import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTwoComponent } from './page-two.component';
import { PageTwoRoutingModule } from './page-two.routing.module';



@NgModule({
  declarations: [PageTwoComponent],
  imports: [
    CommonModule,
    PageTwoRoutingModule
  ]
})
export class PageTwoModule { }
