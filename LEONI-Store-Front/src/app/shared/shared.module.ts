import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PerfectScrollbarModule
  ],
  exports: [
    PerfectScrollbarModule
  ]
})
export class SharedModule { }
