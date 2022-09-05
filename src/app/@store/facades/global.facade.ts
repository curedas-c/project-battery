import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { GLOBAL_STATE_TOKEN } from '@shared/constants/state-tokens.constants';
import { GlobalRouteData } from '@shared/models/core-models.models';
import {
  SetRouteData,
  SwitchMonitoringStatus
} from '@store/actions/global.actions';

@Injectable()
export class GlobalFacade {
  state$ = this.getState();
  constructor(private store: Store) {}

  // Main Selectors
  getState() {
    return this.store.select(GLOBAL_STATE_TOKEN);
  }

  getStateSnapshot() {
    return this.store.selectSnapshot(GLOBAL_STATE_TOKEN);
  }

  // Action Dispatchers
  setRouteData(data: GlobalRouteData) {
    this.store.dispatch(new SetRouteData(data));
  }

  switchMonitoringStatus() {
    this.store.dispatch(new SwitchMonitoringStatus());
  }

  // Snapshots
  getRouteData() {
    return this.getStateSnapshot().routeData;
  }
}
