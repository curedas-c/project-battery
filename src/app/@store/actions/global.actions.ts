import { GlobalRouteData } from '@shared/models/core-models.models';

export class SetRouteData {
  static readonly type = '[GLobal] Set Route Data';
  constructor(public data: GlobalRouteData) {}
}

export class SwitchMonitoringStatus {
  static readonly type = '[GLobal] Switch Monitoring Status';
  constructor() {}
}

export class NotifyRouteChange {
  static readonly type = '[GLobal] Notify Route Change';
  constructor(public data: GlobalRouteData) {}
}
