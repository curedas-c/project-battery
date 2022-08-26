import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

const MODULES: any = [NgxsModule.forFeature([])];

const PROVIDERS: any = [];

@NgModule({
  imports: [CommonModule, ...MODULES],
  providers: PROVIDERS,
  exports: [...MODULES]
})
export class StateModule {}
