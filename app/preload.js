const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  switchMonitoring: status => ipcRenderer.send('switchMonitoring', status)
});
