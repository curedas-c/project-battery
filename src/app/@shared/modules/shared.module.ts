import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';
import { StateModule } from './state.module';

const DECLARATIONS = [PageNotFoundComponent];

const MODULES = [ReactiveFormsModule, FormsModule, StateModule];
@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...MODULES],
  exports: [...DECLARATIONS, ...MODULES]
})
export class SharedModule {}
