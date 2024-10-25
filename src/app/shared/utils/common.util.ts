import {EntityAction} from '@ngrx/data';

export function extractErr(err: EntityAction) {
  return getError(err?.payload?.data?.error?.error);
}
function getError(error: any) {
  if(error.message) {
    return error.message;
  }
  if(error.error) {
    return error.error;
  }
  return error;
}
