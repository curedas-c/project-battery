import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlobalFacade } from '@store/facades/global.facade';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  // globalState$ = this.globalFacade.state$;
  // constructor(private globalFacade: GlobalFacade) {}

  ngOnInit() {}

  switchMonitoringStatus() {
    // this.globalFacade.switchMonitoringStatus();
  }
}
