import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App2Component } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { SecondComponent } from './second/second.component';
import {StoreModule} from '@ngrx/store';
import {AdminLibModule} from '../../../admin-lib/src/lib/admin-lib.module';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';

const routes: Routes = [
  { path: '', component: SecondComponent }
];

@NgModule({
  declarations: [
    App2Component,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AdminLibModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreModule.forFeature('app2ShowHide', showHideReducer)
  ],
  providers: [],
  bootstrap: [App2Component]
})
export class App2Module { }
