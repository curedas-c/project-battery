import { Injectable } from '@angular/core';
// let Window = window as any;

@Injectable({
  providedIn: 'root'
})
export class ElectronRepositoryService {
  constructor() {}

  switchMonitoringStatus(status: boolean) {
    // console.log(Window.electronAPI);
    // Window.electronAPI.switchMonitoringStatus(status);
  }
}
