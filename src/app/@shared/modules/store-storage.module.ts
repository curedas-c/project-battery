import { NgModule } from '@angular/core';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { GlobalState } from '@store/states/global.state';

@NgModule({
  imports: [
    NgxsStoragePluginModule.forRoot({
      key: [GlobalState],
      beforeSerialize: (obj, key) => {
        if (key === 'global') {
          // Save only currentUrl on storage
          return { routeData: { currentUrl: obj?.routeData?.currentUrl } };
        }
        return obj;
      }
    })
  ],
  providers: [],
  exports: []
})
export class StoreStorageModule {}
