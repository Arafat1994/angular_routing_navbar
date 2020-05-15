import { TestBed } from '@angular/core/testing';

import { RoutingModuleService } from './routing-module.service';

describe('RoutingModuleService', () => {
  let service: RoutingModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
