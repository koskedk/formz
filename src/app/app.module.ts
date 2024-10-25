import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {DefaultDataServiceConfig, EntityDataModule} from '@ngrx/data';
import {entityConfig} from './features/entity-metadata';
import {provideHttpClient} from '@angular/common/http';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000',
  timeout: 3000,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !environment.production,// Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, // If set to true, will include stack trace for every dispatched action
      traceLimit: 75, // Maximum stack trace frames to be stored
      connectInZone: true // If set to true, the connection is established within the Angular zone
    })
  ],
  providers: [
    provideHttpClient(),
    {provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
