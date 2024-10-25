import { Injectable } from '@angular/core';
import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {Installment} from '../+models/installment';

@Injectable({
  providedIn: 'root'
})
export class InstallmentService extends EntityCollectionServiceBase<Installment>{

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Installment', serviceElementsFactory);
  }
}
