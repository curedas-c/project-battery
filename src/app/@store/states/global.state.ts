import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { GLOBAL_STATE_TOKEN } from '@shared/constants/state-tokens.constants';
import { GlobalStateModel } from '@shared/models/state-models.models';
import { SetRouteData } from '@store/actions/global.actions';

const DEFAULT_STATE_VALUE = {
  routeData: null
};

@State({
  name: GLOBAL_STATE_TOKEN,
  defaults: DEFAULT_STATE_VALUE
})
@Injectable()
export class GlobalState {
  constructor() {}

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
}
