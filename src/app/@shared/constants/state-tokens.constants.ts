import { StateToken } from '@ngxs/store';
import { GlobalStateModel } from '@shared/models/state-models.models';

export const GLOBAL_STATE_TOKEN = new StateToken<GlobalStateModel>('global');
