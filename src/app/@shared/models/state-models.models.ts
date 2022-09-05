import { GlobalRouteData } from './core-models.models';

export type GlobalStateModel = {
  routeData: GlobalRouteData | null;
  monitoringEnabled: boolean;
};

export type StateFormModel<T> = {
  model: T;
  dirty: boolean;
  status: string;
  errors: any;
};
