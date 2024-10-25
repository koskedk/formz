import { Pipe, PipeTransform } from '@angular/core';
import {extractErr} from '../utils/common.util';
import {EntityAction} from '@ngrx/data';

@Pipe({
  name: 'extractError'
})
export class ExtractErrorPipe implements PipeTransform {

  transform(value: EntityAction): string {
    return extractErr(value);
  }
}
