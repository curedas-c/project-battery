import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@environments/environment';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';
import { GlobalState } from '@store/states/global.state';
import { StoreStorageModule } from './store-storage.module';
import { GlobalFacade } from '@store/facades/global.facade';

const DECLARATIONS: any = [];

const MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  HttpClientModule,
  RouterModule,
  LoadingBarModule,
  LoadingBarHttpClientModule,
  NgxsModule.forRoot([GlobalState], {
    developmentMode: !environment.production
  }),
  StoreStorageModule,
  NgxsLoggerPluginModule.forRoot(),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsFormPluginModule.forRoot()
];

const PROVIDERS = [GlobalFacade];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...MODULES],
  providers: PROVIDERS,
  exports: [...DECLARATIONS, ...MODULES]
})
export class CoreModule {}
