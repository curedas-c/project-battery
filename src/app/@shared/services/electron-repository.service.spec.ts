import { TestBed } from '@angular/core/testing';

import { ElectronRepositoryService } from './electron-repository.service';

describe('ElectronRepositoryService', () => {
  let service: ElectronRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
