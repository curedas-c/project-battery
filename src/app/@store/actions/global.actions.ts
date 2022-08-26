import { GlobalRouteData } from '@shared/models/core-models.models';

export class SetRouteData {
  static readonly type = '[GLobal] Set Route Data';
  constructor(public data: GlobalRouteData) {}
}

export class NotifyRouteChange {
  static readonly type = '[GLobal] Notify Route Change';
  constructor(public data: GlobalRouteData) {}
}
