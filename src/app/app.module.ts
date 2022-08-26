import { NgModule } from '@angular/core';
import { CoreModule } from '@shared/modules/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
