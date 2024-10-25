import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InstallmentListComponent} from './installment-list/installment-list.component';

const routes: Routes = [
  {path:'',component:InstallmentListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudioRoutingModule { }
