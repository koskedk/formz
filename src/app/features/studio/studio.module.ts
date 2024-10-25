import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioRoutingModule } from './studio-routing.module';
import { InstallmentListComponent } from './installment-list/installment-list.component';
import {ExtractErrorPipe} from '../../shared/pipes/extract-error.pipe';


@NgModule({
  declarations: [
    InstallmentListComponent,
    ExtractErrorPipe,
  ],
  imports: [
    CommonModule,
    StudioRoutingModule,
  ]
})
export class StudioModule { }
