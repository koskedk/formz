import {EntityMetadataMap} from '@ngrx/data';
import {studioConfig} from './studio/+state/studio.metadata';

const comE:EntityMetadataMap={
  ...studioConfig.entityMetadata
}

export const entityConfig= {
  entityMetadata: comE,
}
