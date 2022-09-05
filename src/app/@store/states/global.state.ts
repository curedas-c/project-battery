import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GLOBAL_STATE_TOKEN } from '@shared/constants/state-tokens.constants';
import { GlobalStateModel } from '@shared/models/state-models.models';
import { ElectronRepositoryService } from '@shared/services/electron-repository.service';
import {
  SetRouteData,
  SwitchMonitoringStatus
} from '@store/actions/global.actions';

const DEFAULT_STATE_VALUE = {
  routeData: null,
  monitoringEnabled: true
};

@State({
  name: GLOBAL_STATE_TOKEN,
  defaults: DEFAULT_STATE_VALUE
})
@Injectable()
export class GlobalState {
  constructor(private electronRepository: ElectronRepositoryService) {}

  @Action(SetRouteData)
  setRouteData(ctx: StateContext<GlobalStateModel>, action: SetRouteData) {
    const { routeData } = ctx.getState();

    return ctx.patchState({
      routeData: {
        ...routeData,
        ...action.data
      }
    });
  }

  @Action(SwitchMonitoringStatus)
  switchMonitoringStatus(ctx: StateContext<GlobalStateModel>) {
    const { monitoringEnabled } = ctx.getState();
    this.electronRepository.switchMonitoringStatus(!monitoringEnabled);

    return ctx.patchState({
      monitoringEnabled: !monitoringEnabled
    });
  }
}
