import { GlobalRouteData } from './core-models.models';

export type GlobalStateModel = {
  routeData: GlobalRouteData | null;
};

export type StateFormModel<T> = {
  model: T;
  dirty: boolean;
  status: string;
  errors: any;
};
