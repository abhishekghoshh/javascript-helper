import { TestBed } from '@angular/core/testing';

import { SampleResolverService } from './sample-resolver.service';

describe('SampleResolverService', () => {
  let service: SampleResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
