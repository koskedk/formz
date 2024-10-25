import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Installment} from '../+models/installment';
import {InstallmentService} from '../+services/installment.service';
import {EntityAction} from '@ngrx/data';

@Component({
  selector: 'app-installment-list',
  templateUrl: './installment-list.component.html',
  styleUrl: './installment-list.component.scss'
})
export class InstallmentListComponent implements OnInit {

  installments$: Observable<Installment[]>;
  loading$: Observable<boolean>;
  error$: Observable<EntityAction>;

  constructor(private service: InstallmentService) {
    this.installments$ = this.service.entities$;
    this.loading$ = this.service.loading$;
    this.error$ = this.service.errors$
  }

  ngOnInit(): void {
    this.installments$ = this.service.getAll()
  }
}
